require("dotenv").config();
var inquirer = require("inquirer");
var prompts = require("./inquirer/prompts");
var apis = require("./apis/apis");

inquirer.prompt(prompts).then(function(inquirerResponse) {
  apis(inquirerResponse);
});
