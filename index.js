const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");

let fileArray = []; // Array to prepare file before writing

// Array that will take everything from fileArray for file writing
let toArrayString = "";

// Table of Contents for README file ===================>
let contentArray = [
  "1. [ Title. ](#title)\n",
  "2. [ Description. ](#desc)\n",
  "3. [ Usage. ](#usage)\n",
  "4. [ Installation. ](#install)\n",
  "5. [ License. ](#license)\n",
  "6. [ Contribution. ](#contrib)\n",
  "7. [ Tests. ](#tests)\n",
  "8. [ Picture Link](#questionsPict)\n",
  "9. [ Email Link](#questionsEmail)\n",
];
// Array below is contentArray without array links
let content = contentArray.join(" ");
// Clear the console screen before starting the App.
console.clear();

// User Input entries ==========================>

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your Github Username?                     : ".white
        .bgBlue,
      name: "name",
    },
    {
      type: "input",
      message: "What is your project's Title?          : ".white.bgBlue,
      name: "title",
    },
    {
      type: "input",
      message: "What is your project's description?    : You can copy and paste from the clipboard \n\n"
        .white.bgBlue,
      name: "description",
    },
    {
      type: "input",
      message: "What is your project's Installation ?  : ".white.bgBlue,
      name: "installation",
    },
    {
      type: "input",
      message: "What is your usage?                    : ".white.bgBlue,
      name: "usage",
    },
    {
      type: "input",
      message: "What is your License?                  : ".white.bgBlue,
      name: "license",
    },
    {
      type: "input",
      message: "What is your Contribution?             : ".white.bgBlue,
      name: "contribution",
    },
    {
      type: "input",
      message: "What is your tests?                    : ".white.bgBlue,
      name: "tests",
    },
    {
      type: "input",
      message: "Include Path of your Github Profile Picture ?               : "
        .white.bgBlue,
      name: "questionsPict",
    },
    {
      type: "input",
      message: "Include your user Github email ?               : ".white.bgBlue,
      name: "questionsEmail",
    },
  ])
  .then(function (response) {
    // Preparation of User Input entries and README.md file settings
    // into array and to write on the output file

    filename = "README.md";
    // Line below takes table of contents and adds to array to prepare to file write
    fileArray.push("# Table of Content" + "\n\n" + content + "\n");
    // Next lines: Add the HTML command for README.md, section's title and user Input
    fileArray.push(
      "<a name=title></a>" +
        "\n# 1. Project's Title\n" +
        "\n" +
        response.title +
        "\n\n"
    );
    fileArray.push(
      "<a name=desc></a>" +
        "\n# 2. Description\n" +
        "\n" +
        response.description +
        "\n\n"
    );
    fileArray.push(
      "<a name=install></a>" +
        "\n# 3. Installation\n\n" +
        "\n" +
        response.installation +
        "\n\n"
    );
    fileArray.push(
      "<a name=usage></a>" + "\n# 4. Usage\n\n" + "\n" + response.usage + "\n\n"
    );
    fileArray.push(
      "<a name=licenset></a>" +
        "\n# 5. License\n\n" +
        "\n" +
        response.license +
        "\n\n"
    );
    fileArray.push(
      "<a name=contrib></a>" +
        "\n# 6. Contributing\n\n" +
        "\n" +
        response.contribution +
        "\n\n"
    );
    fileArray.push(
      "<a name=tests></a>" + "\n# 7. Tests\n\n" + "\n" + response.tests + "\n\n"
    );
    fileArray.push(
      "<a name=questionsPic></a>" +
        "\n# 8. Picture Link\n\n" +
        "\n" +
        "https://github.com/" +
        response.name +
        "/" +
        response.questionsPict +
        "/" +
        "\n\n\n\n"
    );
    fileArray.push(
      "<a name=questionsEmail></a>" +
        "\n# 8. Github Email\n\n" +
        "\n" +
        response.questionsEmail +
        "\n\n\n\n"
    );
    //Finish preparation to write to file
    // console.log(response.questionsPict);
    // Final creation of stream that will write the file README.md
    toArrayString = fileArray.join(" ");
    // Below -> Write to README.md file and error checking
    fs.writeFile(filename, toArrayString, function (error) {
      if (error) {
        console.log(error);
        return;
      }
      console.log("success");
    });
  });
