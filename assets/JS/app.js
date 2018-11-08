let currentSlide = 0;

$(`.left-arrow`).on(`click`, function () {
    //Gives which direction the scroll should be going
    const direction = `backwards`;

    //First this scrolls the current selection out of the way
    scrollCurrentSlide(direction, currentSlide);
    //Then it moves the slider one position to the side
    advancePosition(direction)
        //Finally it brings in the next slide
        .then(scrollNextSlide(direction, currentSlide));

    console.log(currentSlide)
})

$(`.right-arrow`).on(`click`, function () {
    //Gives which direction the scroll should be going
    const direction = `forwards`;

    //First this scrolls the current selection out of the way
    scrollCurrentSlide(direction, currentSlide);
    //Then it moves the slider one position to the side
    advancePosition(direction)
        //Finally it brings in the next slide
        .then(scrollNextSlide(direction, currentSlide));

    console.log(currentSlide)
})

const scrollCurrentSlide = function (direction, currentSlide) {
    // Shows and hides divs based on the current slide
    return new Promise(function () {
        if (direction === `backwards`) {
            //Add the class to make the div move
            $(`.slide${currentSlide}`).addClass(`fadeOutLeftBig onBottom`);

            //setTimeout is to make the div hide just before the animation ends
            setTimeout(function () {
                $(`.slide${currentSlide}`).hide().removeClass(`fadeOutLeftBig onBottom`);
            }, 1900);

        } else if (direction === `forwards`) {
            //Add the class to make the div move
            $(`.slide${currentSlide}`).addClass(`fadeOutRightBig onBottom`);

            //setTimeout is to make the div hide just before the animation ends
            setTimeout(function () {
                $(`.slide${currentSlide}`).hide().removeClass(`fadeOutRightBig onBottom`);
            }, 1900);
        };
    });
};

const scrollNextSlide = function (direction, currentSlide) {
    //TODO Make the slide come up on button click
    return new Promise(function () {
        if (direction === `backwards`) {
            $(`.slide${currentSlide}`).show().addClass(`fadeInRightBig onTop`);
            setTimeout(function () {
                $(`.slide${currentSlide}`).removeClass(`fadeInRightBig onTop`);
            }, 2000);
        } else if (direction === `forwards`) {
            $(`.slide${currentSlide}`).show().addClass(`fadeInLeftBig onTop`);
            setTimeout(function () {
                $(`.slide${currentSlide}`).removeClass(`fadeInLeftBig onTop`);
            }, 2000);
        };
    });
};

const advancePosition = function (direction) {
    return new Promise(function () {
        if (direction === `backwards`) {
            currentSlide--;
            if (currentSlide < 0) {
                //If they are at the beginning of the slides, toggle to the end
                currentSlide = 1;
            };
        } else if (direction === `forwards`) {
            currentSlide++;
            if (currentSlide > 1) {
                currentSlide = 0;
            };
        };
    });
};