import herc, { QuestionData } from "../services/hercai";
import bot, { Context } from "../services/telegraf";
import { markdownEscaper } from "../functions/filters";

/**
 * @param ctx - Context from telegraf
 * @description Message event
 * @function messageEvent
 * @returns {void} - Returns nothing
 */
const messageEvent = async (ctx: Context) => {
  var replyToMessage = ctx.message && "reply_to_message" in ctx.message ? ctx.message.reply_to_message : null;
  var messageText = ctx.message && "text" in ctx.message ? ctx.message.text : null;
  if (replyToMessage?.from?.username == ctx.botInfo.username || messageText?.includes(`@${ctx.botInfo.username}`) || ctx.chat?.type == "private") {
    var Question: string | any = messageText?.toString().replaceAll(`@${ctx.botInfo.username}`, ``);
    if (!Question || Question == "" || Question == null)
      return ctx.reply(`${ctx.from?.first_name}, Lütfen Bir Soru Giriniz!`).catch((err) => {});
    ctx.sendChatAction("typing").catch((err) => {});
    herc.question({
        model: "v3-32k",
        content: Question
      }).then((res: QuestionData) => {
        bot.telegram.sendMessage("" + ctx.chat?.id, `${markdownEscaper(res.reply)}`, {
            reply_to_message_id: ctx.message?.message_id,
            disable_web_page_preview: false,
            parse_mode: "Markdown"
          }).catch((err) => {
            bot.telegram.sendMessage("" + ctx.chat?.id, `${markdownEscaper(res.reply)}`, {
                reply_to_message_id: ctx.message?.message_id,
                disable_web_page_preview: false
              }).catch((err) => {});
          });
      }).catch((err) => {
        ctx.reply(`${ctx.from?.first_name}, Something went wrong! Please try again.\nError; ${(err as Error).message.includes("429") ? `Payment Required; Too many request created from this IP, please try again after an hour or bypass this obstacle by purchasing a one-time unlimited hercai key.\nhttps://hercai-shop.onrender.com` : (err as Error).message}`).catch((err) => {});
      });
  }
};

export default messageEvent;
