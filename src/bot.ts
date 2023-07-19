import { Configuration, OpenAIApi } from "openai";
import colors from "colors";
import { addBotMessage, messages } from "./message.js";

let openAi: OpenAIApi;
//处理执行逻辑优先导致未注入的问题
export function initBot() {
  openAi = new OpenAIApi(
    new Configuration({
      basePath: "https://jiushi21.win/v1",
      apiKey: process.env.OPEN_API_KEY,
    })
  );
}

export async function botAnswer() {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });
  const answer = chatCompletion.data.choices[0].message?.content;
  addBotMessage(answer!);

  console.log(colors.bold.red("Jarvis: "), answer);
}
