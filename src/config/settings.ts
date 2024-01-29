import { Settings } from "../schemas/settings";

//! If You Have Filled In The Required Fields In The .env File, You Do Not Need To Change Anything In This File.

var config: Settings = {
  telegramBotToken: process.env.telegramBotToken || "", //* You can get your bot token from @BotFather on Telegram.

  hercaiApiKey: process.env.hercaiKey || "", //? There is a limit of 15 requests per minute in free use, you must make a one-time fee to make unlimited requests, you can purchase a one-time unlimited Hercai API Key from https://hercai-shop.onrender.com, the fee is low. 
  //! ( If Your API Key Doesn't Exist, Leave It Blank )

  eighteenPlusFilter: process.env.eighteenPlusFilter == "true" ? true : false || false //? If you want to filter +18 content, set it to true. (Default: false)
};

export default config;
