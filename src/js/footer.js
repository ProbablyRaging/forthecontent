$('.burger').click(function () {
    $('.nav__menu').slideToggle(150);
    $('html').toggleClass('mobile-nav--is-open');
    $('.nav__menu').toggleClass('nav__menu--hide').css({ display: "flex" });
});

$(function () {
    $('#accordian h3').click(function () {
        $(this).parent().parent().find('ul').slideUp(150);
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown(150);
        }

    });
});