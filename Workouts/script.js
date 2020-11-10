/*
var rellax = new Rellax('.rellax');
function parallax(x) {
    x = window.matchMedia("(min-width: 992px)");
    if (x.matches) {
        rellax.refresh()
    }
    else{
        rellax.destroy();
    }
}
parallax(x)
window.addEventListener("resize",parallax);
x.addEventListener("resize",parallax);
(/
 */

var x = window.matchMedia("(min-width: 992px)");
var y = window.matchMedia("(max-width: 991px)");
$("#timed, #beep, #pro, #number").addClass("hidden");
(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#timed, #beep, #workout-1, #workout-2, #workout-3, #workout-4');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {
                element2.classList.remove('hidden');
                element2.classList.add('animate__animated');
                if(y.matches){
                    element2.classList.add('animate__fadeIn');
                    $('#workout-1').removeClass('delay1');
                    $('#workout-2').removeClass('delay2');
                    $('#workout-3').removeClass('delay3');
                    $('#workout-4').removeClass('delay4');
                }
                else {
                    element2.classList.add('animate__fadeIn');
                }
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
        elements1 = document.querySelectorAll('#number, #pro');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {
                element2.classList.remove('hidden');
                element2.classList.add('animate__animated');
                if(y.matches){
                    element2.classList.add('animate__fadeIn');
                }
                else {
                    element2.classList.add('animate__fadeIn');
                }
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
