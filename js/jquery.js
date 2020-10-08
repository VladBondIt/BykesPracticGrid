$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__sub-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.place__slider').slick({
        speed: 800,
        touchThreshold: 20,
        dots: true,
        slidesToShow: 1,
        fade: true,
    });
    $('.place__slider').slick('setPosition');
});