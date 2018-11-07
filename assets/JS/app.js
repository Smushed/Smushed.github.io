let currentSlide = 0;

//TODO Make it so if scrolls to the right or the left
$(".left-arrow").on("click", function () {
    const nextSlide = currentSlide + 1
    scrollCurrentSlide(currentSlide)
        .then(advancePosition("backwards", currentSlide))
    scrollNextSlide(nextSlide);

    console.log(currentSlide)
})

//TODO Make it so if scrolls to the right or the left
$(`.right-arrow`).on(`click`, function () {
    // Shows and hides divs based on the current slide
    $(`.slide${currentSlide}`).hide();

    currentSlide++;
    if (currentSlide > 2) {
        //If they are at the beginning of the slides, toggle to the end
        currentSlide = 1;
    }

    $(`.slide${currentSlide}`).show();
    console.log(currentSlide)
})

const scrollCurrentSlide = function (currentSlide) {
    // Shows and hides divs based on the current slide
    return new Promise(function () {
        $(`.slide${currentSlide}`).addClass(`fadeOutLeftBig`);
        setTimeout(function () { $(`.slide${currentSlide}`).hide() }, 1900)
    });
};

const scrollNextSlide = function (nextSlide) {
    //TODO Make the slide come up on button click
    return new Promise(function () {
        $(`.slide${nextSlide}`).show();
        $(`.slide${nextSlide}`).addClass(`fadeInRightBig`);
    });
};

const advancePosition = function (direction, currentSlide) {
    return new Promise(function () {
        if (direction === `backwards`) {
            currentSlide--;
            if (currentSlide < 0) {
                //If they are at the beginning of the slides, toggle to the end
                currentSlide = 1;
            } else if (currentSlide > 1) {
                currentSlide = 0;
            }
        }
        $(`.slide${currentSlide}`).hide();
    })
}