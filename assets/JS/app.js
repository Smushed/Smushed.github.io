let currentSlide = 1;

//TODO Make it so if scrolls to the right or the left
$(".left-arrow").on("click", function () {


    scrollCurrentSlide(currentSlide)
    advancePosition("backwards")


    // setTimeout(function () { $(`.slide${currentSlide}`).show() }, 2000);
    console.log(currentSlide)
})

//TODO Make it so if scrolls to the right or the left
$(".right-arrow").on("click", function () {
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
    $(`.slide${currentSlide}`).addClass("fadeOutLeftBig");
    setTimeout(function () { $(`.slide${currentSlide}`).hide() }, 1900);
};

const advancePosition = function (direction, currentSlide) {
    return new Promise(function () {
        if (direction === "backwards") {
            currentSlide--;
            if (currentSlide < 1) {
                //If they are at the beginning of the slides, toggle to the end
                currentSlide = 2;
            } else if (currentSlide > 2) {
                currentSlide = 1;
            }
        }
    })
}