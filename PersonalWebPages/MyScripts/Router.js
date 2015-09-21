
// document is ready and DOM constructed.
$(function () {
    defaultPage();
});

// default page for redirect.
function defaultPage() {
    this.redirectTo("Home", "navHome");
}

// redirecting function
var redirectTo = function(page, selItem) {

    $("#documentContent").load(page + ".html", function(response, status) {
        if (status === "error") {
            defaultPage();
        }

        $("#menuRoot").children().removeClass("active");

        $("#" + selItem).addClass("active");
    });
}
