$(document).ready(function() {
    var height = $(window).height();
    var heightText = "Window height = " + height;
    console.log(heightText);

    var width = $(window).width();
    var widhtText = "Window width = " + width;
    console.log(widhtText);

    $("#windowHeight").text(height);
    $("#windowWidth").text(width);


});