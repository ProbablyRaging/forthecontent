$('.burger').click(function () {
    $('.nav__menu').slideToggle(150);
    $('html').toggleClass('mobile-nav--is-open');
    $('.nav__menu').toggleClass('nav__menu--hide').css({ display: "flex" });
});