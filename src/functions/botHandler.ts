import fs from "fs";
import path from "path";
import logHandler from "./logHandler";
import chalk from "chalk";
const logger = new logHandler();

/** 
  * @description Load all commands from src/commands folder
  * @param bot - Telegraf bot instance
  * @function commandsHandler
  * @returns {void} - Returns nothing
  */
function commandsHandler(bot: any) {
  try {
    const commandsDir = path.join(__dirname, "../commands");
    fs.readdirSync(commandsDir).forEach((file) => {
      const commandPath = path.join(commandsDir, file);
      const command = require(commandPath).default;
      const commandName = file.replace(".ts", "");
      if (commandName == "start") bot.start(command);
      if (commandName == "help") bot.help(command);
      bot.command(commandName, command);
      logger.successLogger(`Command ${chalk.white(commandName)} loaded!`);
    });
  } catch (error) {
    logger.warnLogger((error as Error).message);
  }
}

/** 
  * @description Load all events from src/events folder
  * @param bot - Telegraf bot instance
  * @function eventsHandler
  * @returns {void} - Returns nothing
  */
function eventsHandler(bot: any) {
  try {
    const commandsDir = path.join(__dirname, "../events");
    fs.readdirSync(commandsDir).forEach((file) => {
      const commandPath = path.join(commandsDir, file);
      const command = require(commandPath).default;
      const commandName = file.replace(".ts", "");
      bot.on(commandName, command);
      logger.successLogger(`Event ${chalk.white(commandName)} loaded!`);
    });
  } catch (error) {
    logger.warnLogger((error as Error).message);
    console.log(error);
  }
}

export { commandsHandler, eventsHandler };
