$(function () {

    // SlickSlider
    $(".top-slider__wrapper").slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    // Попап
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

   
    // Звездный рейтинг
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

    // Таймер
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.sale-timer__days');
        const hoursSpan = clock.querySelector('.sale-timer__hours');
        const minutesSpan = clock.querySelector('.sale-timer__minutes');
        const secondsSpan = clock.querySelector('.sale-timer__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    // const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    // таймер на 15 часов, будет перезапускатся при перезагрузке страницы
    // const deadline = '2025-12-31';
    // таймер на определенное время, перезапускаться не будет
    const deadline = $("#sale-timer").attr("data-timeout");
    initializeClock("sale-timer", deadline);

    // RangeSlider
    // При вызове этого плагина в файле main.js, если его ставить первым, то перестают работать другие плагины,
    // а если его поставить последним, то он не работает. Поэтому поставил его напрямую в html
    // $(".js-range-slider").ionRangeSlider({
    //     type: "double",
    //     min: 0,
    //     max: 1000,
    //     from: 200,
    //     to: 500,
    //     grid: true
    // });

});