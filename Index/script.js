
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
        elements = document.querySelectorAll('#text-one, #text-three, #text-five');
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
        elements1 = document.querySelectorAll('#text-two, #text-four');
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
            else{
                element2.classList.remove('chart-animate');
                element2.classList.add('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();


function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
}

function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;

    $(id + " ." + sliceID).css({
        "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });

    $(id + " ." + sliceID + " span").css({
        "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
        "background-color": color
    });
}

function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
        maxSize = 179,
        sliceID = "s" + dataCount + "-" + sliceCount;

    if( sliceSize <= maxSize ) {
        addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
        addSlice(id, maxSize, pieElement, offset, sliceID, color);
        iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
}

function createPie(id) {
    var
        listData      = [],
        listTotal     = 0,
        offset        = 0,
        i             = 0,
        pieElement    = id + " .pie-chart__pie"
    dataElement   = id + " .pie-chart__legend"

    color         = [
        "rgb(69,255,153)",
        "rgb(255,66,76)"
    ];

   listData = [7,3];

    listTotal = 14;

    for(i=0; i < listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(id, size, pieElement, offset, i, 0, color[i]);
        offset += size;
    }
}

function createPieCharts() {
    createPie('.pieID--operations' );
}
createPieCharts();

(function() {
    var elements1;
    var windowHeight1;

    function init() {
        elements1 = document.querySelectorAll('.slice');
        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                element2.classList.add('pie-animate');
                element2.classList.remove('hidden');
            }
            else{
                element2.classList.remove('pie-animate');
                element2.classList.add('hidden');
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
        elements1 = document.querySelectorAll('polyline');

        windowHeight1 = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements1.length; i++) {
            let element2 = elements1[i];
            let positionFromTop2 = elements1[i].getBoundingClientRect().top;

            if (positionFromTop2 - windowHeight1 <= 0 ) {
                element2.classList.add('line-animate');
                element2.classList.remove('hidden');
            }
            else{
                element2.classList.remove('line-animate');
                element2.classList.add('hidden');
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
                element2.classList.add('feature-fadeIn');
                element2.classList.remove('hidden');
            }
            else{
                element2.classList.remove('feature-fadeIn');
                element2.classList.add('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
