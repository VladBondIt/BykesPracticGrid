$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__sub-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.slider').slick({
        speed: 800,
        touchThreshold: 20,
        dots: true,
    });
});