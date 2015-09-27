$(document).ready(function() {
    var height = $(window).height();
    var heightText = "Window height = " + height;
    console.log(heightText);

    var width = $(window).width();
    var widhtText = "Window width = " + width;
    console.log(widhtText);

    $("#windowHeight").text(height);
    $("#windowWidth").text(width);

    $.get("AboutMe.htmlx").always(function() {
        alert("Called always")
    });

    $.get("AboutMe.html").done(function() {
            alert("Loaded OK.");
        })
        .done(function() {
            alert("Another done.");
        })
        .fail(function() {
            alert("Get fails!");
        });
});