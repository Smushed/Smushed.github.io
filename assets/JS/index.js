window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("header").css({ "font-size": "15px" });
        $(".logo").css({ "font-size": "30px" });
    } else {
        $("header").css({ "font-size": "20px" });
        $(".logo").css({ "font-size": "90px" })
    }
}