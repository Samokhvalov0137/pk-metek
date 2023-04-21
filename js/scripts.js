$(document).ready(function () {
  // переменные
  let scrollPos = 0;
  let menu = $(".nav-menu"),
    menuHeight = menu.outerHeight();

  //скрытие и отображение блока header при скролле
  $(window).scroll(function () {
    let height_mh = $(".header").outerHeight();

    if ($(window).width() > 319) {
      if ($(this).scrollTop() > height_mh) {
        var st = $(this).scrollTop();
        if (st > scrollPos) {
          // down
          $(".header").removeClass("fix");
          $(".header").css("padding-top", 0);
        } else {
          // up
          $(".header").addClass("fix");
          $(".header").css("padding-top", "px");
        }
        scrollPos = st;
      } else {
        $(".header").removeClass("fix");
        $(".header").css("padding-top", 0);
      }
    }
  });

  // скрытие блока меню навигации при клике вне
  $(document).mouseup(function (e) {
    if ($(window).width() <= 769) {
      let mainMenuBtn = $(".menu-btn");
      let mainMenu = $(".header-main__nav");

      if (
        !mainMenuBtn.is(e.target) &&
        mainMenuBtn.has(e.target).length === 0 &&
        !mainMenu.is(e.target) &&
        mainMenu.has(e.target).length === 0
      ) {
        mainMenu.slideUp(300);
        mainMenuBtn.removeClass("active");
      }
    }
  });

  //функция появление и скрытия бургер меню
  $(".menu-btn").on("click", function () {
    $(this).toggleClass("active");
    $(".header-main__nav").slideToggle();
  });

  //скрытие бургер меню при нажатии на ссылки в нем
  $(".nav-menu__link").on("click", function () {
    if ($(window).width() <= 769) {
      $(".header-main__nav").slideToggle();
      $(".menu-btn").toggleClass("active");
    }
  });

  //подсвечивание ссылок, при нахождении окна на нужном блоке
  $(window).on("scroll", function () {
    let curPos = $(this).scrollTop();
    menu.find(".nav-menu__link").removeClass("active-link");
    $("#services, #about, #stages, #contact").each(function () {
      let top = $(this).offset().top - menuHeight,
        bottom = top + $(this).outerHeight();
      if (curPos >= top && curPos <= bottom) {
        menu.find(".nav-menu__link").removeClass("active-link");
        menu
          .find('.nav-menu__link[href="#' + $(this).attr("id") + '"]')
          .addClass("active-link");
      }
    });
  });

  //плавный скролл до блока при нажатии на ссылки
  $(".goto").click(function () {
    let height_mh = $(".header-main").height();
    let scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate(
        { scrollTop: $(scroll_el).offset().top - height_mh / 2 },
        500
      );
    }
    return false;
  });

  //маска на инпут номера телефона
  $(".phone-mask").inputmask("+7 (999) 999-99-99", { showMaskOnHover: false });
});
