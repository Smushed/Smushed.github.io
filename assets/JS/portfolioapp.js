let currentSlide = 1;

$(`.carousel`).on(`slide.bs.carousel`, function (event) {
    console.log(event.direction)
    changeBackground(event.direction)
});

const changeBackground = (direction) => {
    if (direction === `right`) {
        if (currentSlide === 1) {
            currentSlide = 2;
        } else {
            currentSlide--;
        };
    } else if (direction === `left`) {
        if (currentSlide === 2) {
            currentSlide = 1;
        } else {
            currentSlide++;
        };
    };
    updateBackgroundColor(currentSlide);
};

const updateBackgroundColor = (currentSlide) => {
    if (currentSlide === 1) {
        $(`.portfolio-background`).css({ "background-color": `rgb(29, 55, 73)` });
    } else {
        $(`.portfolio-background`).css({ "background-color": `rgb(47, 73, 30)` });
    };
};

// So the carousel can slide left to right with arrow keys
$(document).keyup(e => {
    const inputKey = e.keyCode;
    // if the input is the left arrow then the previous slide comes up
    if (inputKey === 37) {
        $(`.carousel`).carousel(`prev`);
        changeBackground(`back`);
    } else if (inputKey === 39) {
        $(`.carousel`).carousel(`next`);
        changeBackground(`forward`);
    };
});