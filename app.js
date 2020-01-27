import inquirer from "inquirer";
import menuPrompts from "./inquirer/prompts";
import apis from "./apis/apis";

inquirer.prompt(menuPrompts).then(function(userMenuItemInput) {
	apis(userMenuItemInput);
});
