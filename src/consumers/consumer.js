import { env } from "../config/env.js"
import kafka from "../config/kafka.js"


export const consumer = kafka.consumer({groupId:env.KAFKA_GROUP_ID || "notification-group"})

export const connectConsumer = async () =>{
    await consumer.connect()
}

export const disconnectConsumer = async () =>{
    await consumer.disconnect()
}