import bot, { Context } from "../services/telegraf";

/**
 * @param ctx - Context from telegraf
 * @description Start command
 * @function startCommand
 * @returns {void} - Returns nothing
 */
const startCommand = (ctx: Context) => {
  ctx.reply(returnStartText(), {
      reply_to_message_id: ctx.message?.message_id,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            { text: "⚫ Github", url: "https://github.com/Bes-js" },
            { text: "🔵 Discord Support", url: "https://discord.gg/luppux" }
          ],
          [
            {
              text: "🔴 Hercai API Key",
              url: "https://hercai-shop.onrender.com"
            },
            { text: "👤 Author", url: "https://linktr.ee/beykant" }
          ]
        ]
      }
    })
    .catch((err) => {});
};

export default startCommand;


/**
 * @description Return start text
 * @function returnStartText
 * @returns {string} - Returns start text
 */
function returnStartText(): string {
  return `*Telegram AI Bot - Start Menu*

*Welcome to our AI-powered Telegram Bot! Here's some information on how to get started.*

*Commands*

*/start* - \`Shows the information menu\`

*/ask <Question> -* \`This command allows the user to interact with the bot about a specific question or topic. The user asks the question and gets the bot's answer. Thanks to this command, the bot tries to understand the questions with a predetermined or advanced artificial intelligence algorithm and gives the most appropriate answer.\`

*/imagine <Prompt> -* \`You can enter any text or group of words as a prompt using the command. AI analyzes this text-based prompt and extracts the meaning, creating an image. Thus, the user can see and share a textual expression in image format. Thanks to this command, it becomes possible to interact creatively with artificial intelligence and visualize text-based ideas.\`

*Additionally, you can ask questions by tagging @bot and replying to messages written via DM.*

*Features and Options:*

\`Chat with the AI: You can engage in a conversation with our AI bot and explore its conversational abilities. It can provide answers to your questions, assist with various tasks, or simply engage in small talk.\`

\`Language Selection: Our AI bot supports multiple languages. You can choose your preferred language to communicate with the bot. Available options include English, Spanish, French, German, and more.\`

\`Information Retrieval: The bot is equipped with a vast database of knowledge. You can ask it for information on various topics, such as general facts, famous personalities, historical events, and more.\`

\`Fun and Entertainment: Our AI bot can provide you with fun facts, jokes, riddles, or even play games with you. Just let the bot know what you're interested in, and it will make sure you have an enjoyable experience.\``;
}
