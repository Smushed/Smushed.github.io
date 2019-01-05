let currentSlide = 1;

const changeBackground = (direction) => {
    if (direction === `back`) {
        if (currentSlide === 1) {
            currentSlide = 2;
        } else {
            currentSlide--;
        };
    } else if (direction === `forward`) {
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
        $(`.portfolio-background`).css({ "background-image": `linear-gradient(rgb(29, 55, 73), rgb(29, 55, 73))` });
    } else {
        $(`.portfolio-background`).css({ "background-image": `linear-gradient(rgb(47, 73, 30), rgb(47, 73, 30))` });
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

$(`.left-arrow`).on(`click`, () => { changeBackground(`back`) });
$(`.right-arrow`).on(`click`, () => { changeBackground(`forward`) });