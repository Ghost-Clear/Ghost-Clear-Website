
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
(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('#text-one');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -100) {
                element.classList.add('text-animateLR');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
