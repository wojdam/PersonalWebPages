$(document).ready(function() {
    var height = $(window).height();
    var heightText = "Window height = " + height;
    console.log(heightText);

    var width = $(window).width();
    var widhtText = "Window width = " + width;
    console.log(widhtText);

    $("#windowHeight").text(height);
    $("#windowWidth").text(width);

    var local = 5;
    console.log(local);

    {// pozor ikdyz je v bloku definovana separatne, stejne se prepise!!!
        var local = 9;
        console.log(local);
    }

    console.log(local);

    var mountains = function() {
        var hill = function() {
            return "/**\\";
        }

        var plate = function(length) {

            var text = "";
            for (var i = 0; i < length; i++) {
                text += "_";
            }
            return text;
        }

        var xxx = plate(3);
        xxx += hill();
        xxx += plate(4);
        xxx += hill();
        xxx += plate(2);

        return xxx;
    }

    console.log(mountains());



    //function chicken() {
    //    return egg();
    //}

    //function egg() {
    //    return chicken();
    //}

    //console.log(chicken());

    //$.get("AboutMe.htmlx").always(function() {
    //    alert("Called always")
    //});

    //$.get("AboutMe.html").done(function() {
    //        alert("Loaded OK.");
    //    })
    //    .done(function() {
    //        alert("Another done.");
    //    })
    //    .fail(function() {
    //        alert("Get fails!");
    //    });
});