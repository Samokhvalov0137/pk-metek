new Swiper(".project-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3.2,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    725: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

new Swiper(".product-mobile-swiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3.2,
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    725: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 3000,
  },
});

$(document).ready(function () {
  // открытие попапа

  $(".popup").magnificPopup({
    type: "inline",
  });


    //функция появление и скрытия бургер меню
    $(".menu-btn").on("click", function (e) {
      e.stopImmediatePropagation();
      $(this).toggleClass("active");
      $(".header-main__nav").slideToggle();
    });


  //скрытие навигации при клике на поиск в хедере
  $(".header-main__form").on("click", function () {
    if ($(window).width() > 769) {
      $(".nav-menu").toggleClass("nav-menu-hide");
      $(".header-main__form").addClass("active");
    }
  });

  //скрытие поиска при нажатиии на close
  $(".header-close-img").on("click", function (e) {
    e.stopImmediatePropagation();
    $(".nav-menu").removeClass("nav-menu-hide");
    $(".header-main__form").removeClass("active");
  });


  // скрытие блока меню навигации при клике вне
  $(document).on("mouseup", function (e) {
    // При нажатии на документ
    let hide = $(".nav-menu.nav-menu-hide"); // берём .block.-active
    let show = $(".header-main__form.active"); // берём .block.-active

    if (!hide.is(e.target) && hide.has(e.target).length === 0) {
      // Если нажат не он и не его дочернии И сам он существует
      hide.removeClass("nav-menu-hide"); // То удаляем у него класс .active
    }

    if (!show.is(e.target) && show.has(e.target).length === 0) {
      // Если нажат не он и не его дочернии И сам он существует
      show.removeClass("active"); // То удаляем у него класс .active
    }
  });



  // переменные
  let scrollPos = 0;
  let menu = $(".nav-menu"),
    menuHeight = menu.outerHeight();

  // //скрытие и отображение блока header при скролле
  $(window).scroll(function () {
    let height_mh = $(".header-fix").outerHeight();

    if ($(window).width() > 319) {
      if ($(this).scrollTop() > height_mh) {
        var st = $(this).scrollTop();
        if (st > scrollPos) {
          // down
          $(".header-fix").removeClass("fix");
          $(".header-fix").css("padding-top", 0);
        } else {
          // up
          $(".header-fix").addClass("fix");
          $(".header-fix").css("padding-top", "px");
        }
        scrollPos = st;
      } else {
        $(".header-fix").removeClass("fix");
        $(".header-fix").css("padding-top", 0);
      }
    }
  });


  if ($(window).width() <= 769) {
      $('.services-title').after($('.services-elements'));
  };

  if ($(window).width() <= 769) {
    $('.parter-link').after($('.about-left-bottom'));
};

  // $('.services-term').after($('.services-description'));

  // // скрытие блока меню навигации при клике вне
  // $(document).mouseup(function (e) {
  //   if ($(window).width() <= 769) {
  //     let mainMenuBtn = $(".menu-btn");
  //     let mainMenu = $(".header-main__nav");

  //     if (
  //       !mainMenuBtn.is(e.target) &&
  //       mainMenuBtn.has(e.target).length === 0 &&
  //       !mainMenu.is(e.target) &&
  //       mainMenu.has(e.target).length === 0
  //     ) {
  //       mainMenu.slideUp(300);
  //       mainMenuBtn.removeClass("active");
  //     }
  //   }
  // });


  //маска на инпут номера телефона
  $(".phone-mask").inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
});
