import herc, { DrawImageData } from "../services/hercai";
import bot, { Context } from "../services/telegraf";
import { replyWithPhoto } from "../functions/replyUtils";
import { eighteenPlusFilter } from "../functions/filters";
import config from "../config/settings";

/**
 * @param ctx - Context from telegraf
 * @description Imagine command
 * @function imagineCommand
 * @returns {void} - Returns nothing
 */
const imagineCommand = (ctx: Context) => {
  let Prompt: any = ctx && "payload" in ctx ? ctx.payload : null;
  if (!Prompt)return ctx.reply(`${ctx.from?.first_name}, Please Enter a Content!`).catch((err) => {});
  if (config.eighteenPlusFilter && eighteenPlusFilter().some((x) => Prompt.toLowerCase().includes(x)))
    return ctx.reply(`Please Do Not Enter +18 Content, And Try Again.`).catch((err) => {});
  ctx.sendChatAction("upload_photo").catch((err) => {});
  herc.drawImage({ model: "simurg", prompt: Prompt }).then((res: DrawImageData) => {
      replyWithPhoto(ctx, res);
    }).catch((err) => {
      ctx.reply(`${ctx.from?.first_name}, Something went wrong! Please try again.\nError; ${(err as Error).message.includes("429") ? `Payment Required; Too many request created from this IP, please try again after an hour or bypass this obstacle by purchasing a one-time unlimited hercai key.\nhttps://hercai-shop.onrender.com` : (err as Error).message}`).catch((err) => {});
    });
};

export default imagineCommand;
