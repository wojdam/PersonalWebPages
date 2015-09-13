
// redirecting function
var redirectTo = function(page) {

    $("#documentContent").load(page + ".html");
    //$("#documentContent").empty();

    //$.get(page + ".html", function(data) {
    //    $("#documentContent").append(data);
    //});

};