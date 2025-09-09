import { Queue, QueueScheduler } from 'bullmq'
import redisClient from './redis'

// Create queues
export const emailQueue = new Queue('email', {
  connection: redisClient,
})

export const notificationQueue = new Queue('notification', {
  connection: redisClient,
})

export const processingQueue = new Queue('processing', {
  connection: redisClient,
})

// Create schedulers for delayed jobs
export const emailScheduler = new QueueScheduler('email', {
  connection: redisClient,
})

export const notificationScheduler = new QueueScheduler('notification', {
  connection: redisClient,
})

export const processingScheduler = new QueueScheduler('processing', {
  connection: redisClient,
})

