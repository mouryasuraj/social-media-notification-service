import { TOPICS } from "../config/constants.js";
import { consumer } from "./consumer.js";

export const subscribeMailTopic = async () => {
  await consumer.subscribe({
    topic: TOPICS.MAIL_ALERT,
    fromBeginning: true,
  });
};
