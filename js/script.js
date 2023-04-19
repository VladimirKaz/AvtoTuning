let offset = 0;
const sliderLine = document.querySelector('.slider__inline');
const sliderRight = document.querySelector('.right');
const sliderLeft = document.querySelector('.left');

sliderRight.addEventListener('click', function (e) {
    offset = offset + 439;
    if (offset > 1600) {
        offset = 0;
    }
    sliderLine.style.right = offset + 'px';
});

sliderLeft.addEventListener('click', function (e) {
    offset = offset - 440;
    if (offset < 0) {
        offset = 1320;
    }
    sliderLine.style.right = offset + 'px';
});

let otherOffSet = 0;
const otherLine = document.querySelector('.photo_line');
const otherLine2 = document.querySelector('.photo_line2');
const otherSliderLeft = document.querySelectorAll('.arrow-left');
const otherSliderLeft2 = document.querySelectorAll('.arrow-left2');
const otherSliderRight = document.querySelectorAll('.arrow-right');
const otherSliderRight2 = document.querySelectorAll('.arrow-right2');

otherSliderLeft.forEach(element => {
    element.addEventListener('click', function (e) {
        // console.log('left click');
        otherOffSet = otherOffSet + 636;
        if (otherOffSet > 0) {
            otherOffSet = -1908;
        }
        otherLine.style.left = otherOffSet + 'px';
    });
});

otherSliderLeft2.forEach(element => {
    element.addEventListener('click', function (e) {
        // console.log('left click');
        otherOffSet = otherOffSet + 636;
        if (otherOffSet > 0) {
            otherOffSet = -1908;
        }
        otherLine2.style.left = otherOffSet + 'px';
    });
});

otherSliderRight.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log('right click');
        otherOffSet = otherOffSet - 636;
        if (otherOffSet < -1908) {
            otherOffSet = 0;
        }
        otherLine.style.left = otherOffSet + 'px';
    });
});

otherSliderRight2.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log('right click');
        otherOffSet = otherOffSet - 636;
        if (otherOffSet < -1908) {
            otherOffSet = 0;
        }
        otherLine2.style.left = otherOffSet + 'px';
    });
});