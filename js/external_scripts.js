/* !!! Settings of external modules begins */


// настройки слайдера
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        dots: true,
        mobileFirst: true,
        swipeToSlide: true,

    });
});


// бегунок в фильтрах

$('.slider_price').jRange({
    from: 10,
    to: 100,
    step: 1,
    scale: [10, 100],
    format: '%s',
    width: "100%",
    theme: "theme-red",
    showLabels: false,


});

$('.slider_kcal').jRange({
    from: 50,
    to: 2000,
    step: 50,
    scale: [50, 2000],
    format: '%s',
    width: "100%",
    theme: "theme-red",
    showLabels: false,

});


/* Settings of external modules ends !!! */