import bot, { Context } from "../services/telegraf";

/**
 * @param ctx - Context from telegraf
 * @description Ping command
 * @function pingCommand
 * @returns {void} - Returns nothing
 */
const pingCommand = (ctx: Context) => {
  var startDate = Date.now();
  ctx.reply(`[Wait...](https://github.com/Bes-js)`, {
      parse_mode: "Markdown",
      reply_to_message_id: ctx.message?.message_id
    }).then((res) => {
      bot.telegram.editMessageText(ctx.chat?.id,res.message_id,"",`\`Ping:\` *${Date.now() - startDate}ms*`,
      { parse_mode: "Markdown" }).catch((err) => {});
    }).catch((err) => {});
};

export default pingCommand;
