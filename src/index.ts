import { config } from "dotenv";
config();
import bot, { Context, Telegraf } from "./services/telegraf";
import { eventsHandler, commandsHandler } from "./functions/botHandler";
import logHandler from "./functions/logHandler";
const logger = new logHandler();

logger.infoLogger("🔃 Bot Starting...");
commandsHandler(bot);
eventsHandler(bot);
logger.successLogger("🟢 Bot Launched!");

bot.launch();
