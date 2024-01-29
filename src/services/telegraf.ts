import { Context, Telegraf } from "telegraf";
import config from "../config/settings";

const bot = new Telegraf(config.telegramBotToken, {
  handlerTimeout: 1
}) as Telegraf;

export default bot;
export type { Context, Telegraf };
