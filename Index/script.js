var rellax = new Rellax('.rellax', {
    breakpoints:[768, 992, 1201]
});
$(".animated.text").addClass("hidden");
$(".chart span").addClass("hidden");
$("#features").addClass("hidden");
function animateOnScrollTextLeft(){
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('#t1, #t3, #t5 ');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -150 ) {
                element.classList.remove('hidden');
                element.classList.add('zoomIn');

            }

        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}
animateOnScrollTextLeft();

function animateOnScrollTextRight(){
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('#t2, #t4');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -150 ) {
                element.classList.remove('hidden');
                element.classList.add('zoomIn');

            }

        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
}
animateOnScrollTextRight();

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.chart span');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                element2.classList.add('chart-animate');
                element2.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#features');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                element2.classList.remove('hidden');
                element2.classList.add('animate__animated');
                element2.classList.add('animate__zoomInUp');

            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

