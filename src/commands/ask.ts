import herc, { QuestionData } from "../services/hercai";
import bot, { Context } from "../services/telegraf";
import { replyToMessage } from "../functions/replyUtils";

/**
 * @param ctx - Context from telegraf
 * @description Ask command
 * @function askCommand
 * @returns {void} - Returns nothing
 */
const askCommand = (ctx: Context) => {
  let Question: any = ctx && "payload" in ctx ? ctx.payload : null;
  if (!Question)
    return ctx.reply(`${ctx.from?.first_name}, Please Enter a Question!`).catch((err) => {});
  herc.question({ model: "v3", content: Question }).then((res: QuestionData) => {
      replyToMessage(ctx, res);
    }).catch((err) => {
      ctx.reply(`${ctx.from?.first_name}, Something went wrong! Please try again.\nError; ${(err as Error).message.includes("429") ? `Payment Required; Too many request created from this IP, please try again after an hour or bypass this obstacle by purchasing a one-time unlimited hercai key.\nhttps://hercai-shop.onrender.com` : (err as Error).message}`).catch((err) => {});
    });
};

export default askCommand;
