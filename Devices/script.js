
let animation = lottie.loadAnimation({
    container: document.getElementById("device-animation"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Animations/deviceAnimate.json'
})
animation.setSpeed(2);
animation.play();
function stopAnimation(){
    animation.pause();
}
function slowAnimation(){
    animation.setSpeed(1);
    document.getElementById("animate-container").classList.add("blurOutAnimate")
}
setTimeout(slowAnimation, 3*1000);
setTimeout(stopAnimation, 6*1000);

let animation2 = lottie.loadAnimation({
    container: document.getElementById("light-image"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/lightAnimate.json'
})

let animation3 = lottie.loadAnimation({
    container: document.getElementById("battery-image"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animations/batteryAnimate.json'
})

$("#sensor, #device, #light-image, #battery-image").addClass("hidden");
function start1(){
(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#sensor, #device');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {
                element2.classList.remove('hidden');
                element2.classList.add('animate__animated');
                element2.classList.add('animate__fadeInRight');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})()}
function start2(){
(function () {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('#light-image, #battery-image');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -150 ) {
                element2.classList.remove('hidden');
                element2.classList.add('animate__animated');
                element2.classList.add('animate__fadeInLeft');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})()};
setTimeout(start1,500)
setTimeout(start2,500)
