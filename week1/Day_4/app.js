$(document).ready(function () {

    //DOM is fully loaded
    $("#click-me").on("click", function() {
       alert("Clicked");
    });

    $("#change-background").on("click", function() {
        // Alter the backgroudn color of the div to blue
       $("#animated-div").css("background-color", "blue");
    });

    $("#animate-me").on("click", function() {
        //Add the "animate" class to the div to activate animation
        $("#animated-div").addClass("animate");
    });

    $("#change-html").on("click", function() {
        // $("#animated-div").html("<h1>Hello World</h1>");
        //.val() gets value from the user input
        var userName = $("#name-input").val();

        $("#animated-div").html(`<h1>Hello ${userName}!</h1>`)
    });
});