import inquirer from "inquirer";
import prompts from "./inquirer/prompts";
import apis from "./apis/apis";

inquirer.prompt(prompts).then(function(inquirerResponse) {
	apis(inquirerResponse);
});
