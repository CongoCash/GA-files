$(document).ready(function() {
    $("#fade-div").on("click", function() {
        $("#animated-div").fadeOut();
    });

    $("#slideToggle-div").on("click", function() {
        $("#animated-div").slideToggle(5000);
    });

    $("#custom-animate").on("click", function() {
        $("#animated-div").animate({
            "margin-top": "+=20px",
            "margin-left": "+=5px"
        }, 3000, "swing", function() {
            alert("Animation complete");
        });
    });

});