console.log("Hello World");
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openAi = new OpenAIApi(
  new Configuration({
    basePath: "https://api.chatanywhere.cn/v1",
    apiKey: process.env.OPEN_API_KEY,
  })
);

(async () => {
  const chatCompletion = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "vuejs的作者是谁?",
      },
    ],
  });

  console.log(chatCompletion);
})();
