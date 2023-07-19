// console.log("Hello World");
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
import readlineSync from "readline-sync";
import colors from "colors";
import { askQuestion } from "./user.js";
import { checkExit } from "./check.js";
import { botAnswer, initBot } from "./bot.js";
import ora from "ora";
import { startLoading, stopLoading } from "./loading.js";
import {fileURLToPath} from "url"
import {dirname,resolve} from "path"


dotenv.config({
  path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env"),
});
initBot();
// const userInput = readlineSync.question("you:");
// console.log(userInput);

// const openAi = new OpenAIApi(
//   new Configuration({
//     basePath: "https://jiushi21.win/v1",
//     apiKey: process.env.OPEN_API_KEY,
//   })
// );

// const messages: { role: "user" | "assistant"; content: string }[] = [];

//main
(async () => {
  while (true) {
    const userInput = askQuestion();
    checkExit(userInput);
    startLoading();
    await botAnswer();
    stopLoading();

    // const spinner = ora("thinking...\r").start();
    // spinner.stop();
    // const userInput = readlineSync.question(colors.rainbow("you:"));

    // if (
    //   userInput.toLowerCase() === "exit" ||
    //   userInput.toLowerCase() === "quit"
    // ) {
    //   process.exit();
    // }

    // messages.push({ role: "user", content: userInput });
    //   const chatCompletion = await openAi.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages,
    //     // messages: [
    //     //   {
    //     //     role: "user",
    //     //     // content: "vuejs的作者是谁?",
    //     //     content: userInput,
    //     //   },
    //     // ],
    //   });
    //   const answer = chatCompletion.data.choices[0].message?.content;
    //   messages.push({ role: "assistant", content: answer! });

    //   console.log(colors.bold.red("Jarvis: "), answer);
  }
})();
