import { Context } from "../services/telegraf";
import { DrawImageData, QuestionData } from "hercai";
import { markdownEscaper } from "./filters";
import logHandler from "./logHandler";
const logger = new logHandler();


/**
 * @param ctx - Context from telegraf
 * @param res - Response from hercai
 * @description Reply with photo
 * @function replyWithPhoto
 * @returns {void} - Returns nothing
 */
function replyWithPhoto(ctx: Context, res: DrawImageData) {
  ctx.replyWithPhoto(`${res.url}`, {
      reply_to_message_id: ctx.message?.message_id,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "🔎 Image URL", url: `${res.url}` },
            { text: `Reply; ${ctx.from?.username}`, callback_data: "reply" }
          ]
        ]
      }
    })
    .catch((err) => {
      logger.errorLogger(err);
    });
}


/**
 * @param ctx - Context from telegraf
 * @param res - Response from hercai
 * @description Reply to message
 * @function replyToMessage
 * @returns {void} - Returns nothing
 */
function replyToMessage(ctx: Context, res: QuestionData) {
  ctx.reply(`${ctx.from?.first_name}, ${markdownEscaper(res.reply)}`, {
      reply_to_message_id: ctx.message?.message_id,
      parse_mode: 'Markdown'
    }).catch((err) => {
      logger.errorLogger(err);
    ctx.reply(`${ctx.from?.first_name}, ${res.reply}`, {
      reply_to_message_id: ctx.message?.message_id,
    }).catch((err) => {});
    });
}

export { replyWithPhoto, replyToMessage };
