// So the carousel can slide left to right with arrow keys
$(document).keyup(e => {
    const inputKey = e.keyCode;
    // if the input is the left arrow then the previous slide comes up
    if (inputKey === 37) {
        $(`.carousel`).carousel(`prev`)
    } else if (inputKey === 39) {
        $(`.carousel`).carousel(`next`)
    }
});