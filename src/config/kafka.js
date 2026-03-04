import { Kafka } from "kafkajs";
import { env } from "./index.js";

const kafka = new Kafka({
    clientId:"notification-service",
    brokers:[env.KAFKA_BROKER || "localhost:9092"],
    retry:{
        initialRetryTime:300,
        retries:10
    }
})

export default kafka