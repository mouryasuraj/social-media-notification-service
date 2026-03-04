
import { handlers } from "../config/constants.js";
import { consumer } from "./consumer.js";
import { subscribeMailTopic } from "./subscribeTopic.js";



export const startConsumer = async () => {
  await subscribeMailTopic();

  try {
    await consumer.run({
      eachMessage: async ({ topic,message }) => {

        const value = JSON.parse(message.value.toString())
        

        const handler = handlers[topic]

        if(handler){
            console.log("calling the value")
            handler(value)
        }else{
            throw new Error("No handle for topic: ",topic)
        }
      },
    });
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
};
