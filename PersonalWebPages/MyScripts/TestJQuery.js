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

    // function without closure
    function sayHello1(name) {
        var text = "Hello " + name;
        var sayAlert = function() {
            console.log(text);
        }
        sayAlert();
    }

    sayHello1("Martin");

    // closure
    function sayHello2(name) {
        var text = "Hello2 " + name;
        var sayAlert = function() {
            console.log(text);  
        }
        return sayAlert;
    }

    var say2 = sayHello2("Vojik");
    say2();

    // closure
    function sayHello3(name) {
        var text = "Hello3 " + name;
        var sayAlert = function () {
            console.log(text);
        }

        text += "*";
        return sayAlert;
    }

    var say3 = sayHello3("Maartos");
    say3();
    say3();

    var text = "maly velky String";
    console.log(text.toUpperCase());

    var arr = [];
    arr.push("Ahoj");
    arr.push("jak");
    arr.push("se");
    arr.push("vede");

    console.log(arr);

    console.log(arr.join(" "));

    var objectT = {
        manager: false,
        event: ["meeting", "work"]
    };

    console.log(objectT);

    console.log("manager" in objectT);
    console.log("employee" in objectT);

    delete(objectT.manager);

    console.log("manager" in objectT);

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