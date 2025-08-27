$(function () {

    $('.top-slider__wrapper').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    $(".product-item__stars-box").starRating({
        initialRating: 4,
        emptyColor: '#ccccce',
        hoverColor: '#ffc35b',
        activeColor: '#ffc35b',
        useGradient: false,
        strokeWidth: 0,
        starSize: 20,
        minRating: 1,
        readOnly: true,
        callback: function (currentRating, $el) {
            // make a server call here
        }
    });

});