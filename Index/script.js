
let rellax = new Rellax('.rellax')
function goToIndex() {
    window.location.href = 'index.html';
}
document.querySelector("#site-icon").addEventListener("click", goToIndex);
function goToShop(){
    window.location.href = 'Shop/shop.html';
}
document.querySelector("#shop").addEventListener("click", goToShop);
document.querySelector('#text-one').classList.add('hidden');
document.querySelector('#text-two').classList.add('hidden');
(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('#text-one, #text-three');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -100 ) {
                element.classList.add('text-animateLR');
                element.classList.remove('hidden');
            }
            else{
                element.classList.remove('text-animateLR');
                element.classList.add('hidden');
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
        elements1 = document.querySelectorAll('#text-two');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= -100 ) {
                element2.classList.add('text-animateRL');
                element2.classList.remove('hidden');
            }
            else{
                element2.classList.remove('text-animateRL');
                element2.classList.add('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
