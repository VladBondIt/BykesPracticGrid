$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__sub-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// .header__left-submenu,.header__right-submenu
// .header__menu