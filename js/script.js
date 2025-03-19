// ===== フォント読み込み =====
(function (d) {
    var config = {
        kitId: "brb6avz",
        scriptTimeout: 3000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState;
      if (f || (a && a != "complete" && a != "loaded")) return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config);
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
   })(document);
  
  // ===== loading =====
  // slideAnime関数を定義
  function slideAnime() {
    $(".leftAnime").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
      } else {
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
      }
    });
  }
  
  // スクロールイベントでslideAnimeを実行
  $(window).scroll(function () {
    slideAnime();
  });
  
  // ページロード時にslideAnimeを実行
  $(window).on("load", function () {
    slideAnime();
  });
  
  // タイピングエフェクトと要素の順次表示
  $(document).ready(function () {
    const message = "Welcome to portfolio";
    const welcomeMessageDiv = $("#welcome-message");
    let index = 0;
  
    function typeMessage() {
      if (index < message.length) {
        const span = $("<span></span>");
        span.addClass("slide-in_inner leftAnimeInner");
        span.text(message.charAt(index));
        if (message.charAt(index) === " ") {
          span.css("margin-right", "20px"); // スペースの幅を調整
        }
        welcomeMessageDiv.append(span);
        index++;
        setTimeout(typeMessage, 150); // タイピングの速度を調整
      } else {
        setTimeout(showMainContent, 1500); // メインコンテンツを表示するまでの遅延を調整
      }
    }
  
    function showMainContent() {
      $(".loading").css("display", "none");
      $(".main").css("opacity", "1");
      showElementsSequentially(); // 要素を順次表示する関数を呼び出す
    }
  
    function showElementsSequentially() {
      const elements = [
        // $(".header__menubutton-sp"),
        // $(".mv__main__imgtext"),
        // $(".mv__top__imgtext"),
        // $(".mv__bottom__imgtext"),

        $(".Header"),
        $(".mv-imgtext"),
        $(".mv-sb-text"),
        $(".mv-vl"),
        // $(".mv__main__center"),
        // $(".mv__main__bottom"),
      ];
  
      let index = 0;
  
      function showElement() {
        if (index < elements.length) {
          elements[index].css("opacity", "1");
          elements[index].css("transform", "translateY(0)");
          index++;
          setTimeout(showElement, 400); // 各要素の表示間隔を調整
        }
      }
  
      showElement();
    }
  
    // 初回訪問時のみローディング画面とタイピングエフェクトを表示するためのwebStorage関数を定義
    function webStorage() {
      if (sessionStorage.getItem("visit")) {
        $(".loading").css("display", "none");
        $(".container").css("opacity", "1");
        $(".main").css("opacity", "1");
        showElementsSequentially(); // 2回目以降の訪問時は即座に要素を順次表示する関数を呼び出す
      } else {
        sessionStorage.setItem("visit", "true");
        $(".loading").css("display", "block"); // 初回訪問時のみローディングエリアを表示
        typeMessage(); // 初回訪問時のみタイピングエフェクトを実行
      }
    }
  
    // 初回訪問時のみ実行する処理をwebStorage関数で行います
    webStorage();
  });
  
  //ハンバーガーメニュー
  
  $(function () {
    $(".menubtn, .header-navsm").on("click", function () {
      $(".menubtn").toggleClass("open");
      $(".header-navsm").fadeToggle();
    });
  });



  // スクロール
  $(function () {
    // index.html
    // ScrollReveal({ reset: false });
    // ScrollReveal().reveal(".mv__contents-vl, .works__contents-vl,.about__vl ", {
    //   delay: 400,
    //   origin: "top",
    //   distance: "10px",
    // });
 
  

    ScrollReveal().reveal(
      ".heading,.works-block, .about-wrapper, .contact-wrapper, .buttun-block ",
      { delay: 300, origin: "bottom", distance: "40px" }
    );

    // ScrollReveal().reveal(
    //   ".works__dental",
    //   { delay: 300, origin: "bottom", distance: "50px" }
    // );


  
    //about.html
  
    ScrollReveal().reveal(".mabout__main__heading ", {
      delay: 200,
      origin: "bottom",
      distance: "50px",
    });
    ScrollReveal().reveal(".about__main__contents ,.about__skill__contents", {
      delay: 200,
      origin: "bottom",
      distance: "50px",
    });
    ScrollReveal().reveal(
      ".about__skill__top-hr , .about__career__title , .about__career__subtitle",
      { delay: 200, origin: "left", distance: "20px" }
    );
    ScrollReveal().reveal(
      ".about__skill__title  , .about__skill__subtitle,.about__career__top-hr",
      { delay: 200, origin: "right", distance: "5px" }
    );
    ScrollReveal().reveal(".timeline li ", {
      delay: 200,
      origin: "top",
      distance: "50px",
      interval: "200",
     
    });
  });
  
  // $(function () {
  //   var $pageTop = $(".fotter-navlink .header-logo a .header-nav");
  //   $pageTop.on("click", function () {
  //     $("body,html").animate(
  //       {
  //         scrollTop: 0,
  //       },
  //       300
  //     );
  //     return false;
  //   });
  // });


//   $(document).ready(function () {
//     // 最初の6つの `.works-card` を表示、それ以外は非表示
//     $(".works-card").slice(6).hide();

//     // ボタンがクリックされたら非表示の `.works-card` を表示
//     $(".buttun").on("click", function () {
//         $(".works-card:hidden").slice(0, 6).slideDown(); // 次の6つを表示
//         if ($(".works-card:hidden").length === 0) {
//             $(this).hide(); // すべて表示されたらボタンを非表示
//         }
//     });
// });


$(document).ready(function () {
  // 最初の6つの `.works-card` を表示、それ以外は非表示
  $(".works-card").slice(6).hide();

  // ボタンがクリックされたら非表示の `.works-card` を表示
  $(".buttun").on("click", function () {
      $(".works-card:hidden").slice(0, 6).each(function (index) {
          $(this)
              // .delay(index * 200) // 順番に表示されるように遅延
              .fadeIn(800) // 600msかけてフェードイン
              .css({ opacity: 1 }); // 完全に表示
             
      });

      if ($(".works-card:hidden").length === 0) {
          $(this).hide(); // すべて表示されたらボタンを非表示
      }
  });
});


$(document).ready(function () {
  $(window).on("scroll", function () {
      let scrollTop = $(window).scrollTop(); // 現在のスクロール位置
      let isDark = false; // 背景が黒のセクションにいるか

      $(" .works-img, .about-firstblock, .profile, .career").each(function () {
          let sectionTop = $(this).offset().top; // 各セクションの上端
          let sectionBottom = sectionTop + $(this).outerHeight(); // 下端

          if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
              isDark = true;
          }
      });

      if (isDark) {
          $(".header-nav, .menubtn span, .header-navsm").addClass("white-text"); // クラスを追加
      } else {
          $(".header-nav, .menubtn span,  .header-navsm").removeClass("white-text"); // クラスを削除
      }
  });
});
 
  
  