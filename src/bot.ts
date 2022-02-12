import { Client, ClientOptions } from "discord.js";
import "dotenv/config";
const bot: Client = new Client({ intents: [] });
bot.login(process.env.TOKEN);
bot.on("ready", () => {
  console.log("bot is redy to flow");
});
