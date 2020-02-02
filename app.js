import inquirer from "inquirer";
import menuPrompts from "./apis/inquirer/prompts";
import apis from "./apis/apis";

inquirer.prompt(menuPrompts).then(function(userMenuItemInput) {
  apis(userMenuItemInput);
});
