$(function () {

    // Переключение кнопок отображения каталога (Только визуальное оформление кнопок)
    $(".catalog-sort__btn").on("click", function() {
        // сначала всем кнопкам удалить .active
        $(".catalog-sort__btn").removeClass("catalog-sort__btn--active");
        // та кнопка, по которой кликнули, добавить .active 
        $(this).addClass("catalog-sort__btn--active");
    });

    // При клике на #catalog-btn-list каталогу добавить .catalog-box--list
    // Внеш. вид карточек товара будет меняться через новый класс родителя
    $("#catalog-btn-list").on("click", function() {
        $(".catalog-box").addClass("catalog-box--list");
    });

    // При клике на #catalog-btn-grid у каталога удалить .catalog-box--list
    $("#catalog-btn-grid").on("click", function() {
        $(".catalog-box").removeClass("catalog-box--list");
    });

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

    // RangeSlider
    $(".price-filter__input").ionRangeSlider({
        type: "double",
        step: 50,
        // min: 0,
        // max: 1000,
        // from: 200,
        // to: 500,
        // прописываются в дата-атрибутах для доступа back-end
        grid: false,
        onStart: function (data) {
            // в span-ы выводим данные из полей data.from и data.to текущего объекта ionRangeSlider
            $(".price-filter__from").text(data.from);
            $(".price-filter__to").text(data.to);
        },
        onChange: function (data) {
            $(".price-filter__from").text(data.from);
            $(".price-filter__to").text(data.to);
        }
    });

    // jQuery Form Styler 
    $(".select-style").styler();


    // Таймер. НУЖНО СТАВИТЬ ПОСЛЕДНИМ!. Т.к. плагины, идущие после него, не работают
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
    // таймер на опр. время, перезапускаться не будет (значение прописано в html в data-атрибуте)
    const deadline = $("#sale-timer").attr("data-timeout");
    initializeClock("sale-timer", deadline);

});