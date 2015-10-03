// Document ready.
$(document).ready(function () {

    var skillsText = PrepareSkillsTable();

    $("#skills-panel").append(skillsText);
});

// Helper method for skills preparation.
function PrepareSkillsTable() {

    var languageSkills = {
        "C/C++": 3,
        "C#": 1,
        "HTML5": 2,
        "CSS3": 1,
        "JavaScript": 1,
        "jQuery": 1,
        "JSON": 2
    };

    var total = "";

    $.each(languageSkills, function(key, value) {
        total += AddSkillLevel(key, value);
    });

    total += "<hr/>";

    var databaseSkills = {
        "PL/SQL Oracle" : 2,
        "MySQL"         : 2
    };

    $.each(databaseSkills, function (key, value) {
        total += AddSkillLevel(key, value);
    });

    total += "<hr/>";

    var develFrameworks = {
        "Entity Framework 6.0"  : 1
    };

    $.each(develFrameworks, function (key, value) {
        total += AddSkillLevel(key, value);
    });

    total += "<hr/>";

    var otherSkills = {
        "Analytical skills" : 4
    };

    $.each(otherSkills, function (key, value) {
        total += AddSkillLevel(key, value);
    });

    return total;
}

// Helper method for one skill.
function AddSkillLevel(skillName, level) {

    if (level < 0 || level > 4)
        return "";

    var levelText;
    var barStyle;
    var levelValue;

    switch (level) {
        case 1:
            levelText = "Basic";
            levelValue = 25;
            barStyle = "success";
            break;
        case 2:
            levelText = "Intermediate";
            barStyle = "info";
            levelValue = 50;
            break;
        case 3:
            levelText = "Advanced";
            barStyle = "warning";
            levelValue = 75;
            break;
        case 4:
            levelText = "Expert";
            barStyle = "danger";
            levelValue = 100;
            break;
        
        default:
            levelText = "Unknown";
            barStyle = "";
            levelValue = 0;
    }

    var part1 = "<div class=\"row\"><div class=\"col-xs-1\">&nbsp;</div><div class=\"col-xs-3\">";
    var part2 = "</div><div class=\"col-xs-3\"><div class=\"progress\"><div class=\"progress-bar  progress-bar-";
    var part3 = "\" role=\"progressbar\" aria - valuenow = \"";
    var part4 = "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ";
    var part5 = "%\">";
    var part6 = " </div></div></div></div>";

    var finalText = part1 + skillName + part2 + barStyle + part3 + levelValue + part4 + levelValue;
    finalText += part5 + levelText + part6;

    return finalText;
}