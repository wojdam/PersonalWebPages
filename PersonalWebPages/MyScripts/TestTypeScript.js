var x = 0;

var Auto = (function () {
    function Auto() {
    }
    Auto.prototype.ahoj = function () {
        console.log("Ahoj zprava");
    };
    return Auto;
})();

var automobil = new Auto();

automobil.ahoj();
//# sourceMappingURL=TestTypeScript.js.map
