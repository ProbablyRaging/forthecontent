function smoothRedirect(location) {
    console.log(top.location.pathname.split('/'));
    if (top.location.pathname.split('/')[1] === location && top.location.pathname.split('/').length < 3) return window.scrollTo(0, 0);
    $('.menu-item').click(function () {
        $('body').css('background-color', 'var(--bg)');
        $('.loader').animate({
            marginTop: 80,
            opacity: 0,
        }, 200, function () {
            window.location.href = `/${location}`
        });
    });
}

if (top.location.pathname.split('/')[1] !== '/') {
    $('.nav').css("background-color", '#1a1e23');
    $('body').css('background-color', 'var(--bg)');
}

$(document).ready(function () {
    if (top.location.pathname !== '/') {
        if (document.documentElement.scrollTop <= 200) window.scrollTo(0, 0);
    }

    if (document.documentElement.scrollTop < 10) {
        $('.nav').attr('style', 'background-color: transparent !important');
    }

    if (top.location.pathname.split('/')[1] === 'resources') {
        $('.nav').attr('style', 'background-color: var(--bg)');
    }
});

$(document).scroll(function () {
    if (top.location.pathname.split('/')[1] !== 'resources') {
        if (document.documentElement.scrollTop > 10) {
            $('.nav').css("background-color", '#1a1e23');
        } else {
            $('.nav').attr('style', 'background-color: transparent !important');
        }
    }
});