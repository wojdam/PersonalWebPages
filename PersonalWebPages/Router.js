
// document is ready DOM constructed.
$(function () {
    defaultPage();
});

// default page for redirect.
function defaultPage() {
    this.redirectTo("Home");
}

// redirecting function
var redirectTo = function(page) {

    $("#documentContent").load(page + ".html", function(response, status) {
        if (status === "error") {
            defaultPage();
        }   
        });
};