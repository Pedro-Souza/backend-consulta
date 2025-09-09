import { Job as BullJob } from 'bullmq'
import { Worker } from 'bullmq'
import redisClient from '@/config/redis'

interface NotificationData {
  userId: string
  type: 'email' | 'push' | 'sms'
  title: string
  message: string
  data?: Record<string, any>
}

export class NotificationWorker {
  private worker: Worker

  constructor() {
    this.worker = new Worker(
      'notification',
      async (job: BullJob<NotificationData>) => {
        await this.processNotification(job)
      },
      {
        connection: redisClient,
        concurrency: 2,
      },
    )

    this.setupEventHandlers()
  }

  private setupEventHandlers(): void {
    this.worker.on('completed', (job: BullJob) => {
      console.log(`Notification job ${job.id} completed successfully`)
    })

    this.worker.on('failed', (job: BullJob, err: Error) => {
      console.error(`Notification job ${job?.id} failed:`, err.message)
    })

    this.worker.on('error', (err: Error) => {
      console.error('Notification worker error:', err)
    })
  }

  private async processNotification(job: BullJob<NotificationData>): Promise<void> {
    const { userId, type, title, message, data } = job.data

    console.log(`Processing notification for user: ${userId}`)
    console.log(`Type: ${type}`)
    console.log(`Title: ${title}`)
    console.log(`Message: ${message}`)

    // Process based on notification type
    switch (type) {
      case 'email':
        await this.sendEmailNotification(userId, title, message, data)
        break
      case 'push':
        await this.sendPushNotification(userId, title, message, data)
        break
      case 'sms':
        await this.sendSmsNotification(userId, title, message, data)
        break
      default:
        throw new Error(`Unknown notification type: ${type}`)
    }
  }

  private async sendEmailNotification(
    userId: string,
    title: string,
    message: string,
    data?: Record<string, any>,
  ): Promise<void> {
    // Simulate email notification
    console.log(`Sending email notification to user ${userId}`)
    console.log(`Subject: ${title}`)
    console.log(`Body: ${message}`)
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    console.log(`Email notification sent to user ${userId}`)
  }

  private async sendPushNotification(
    userId: string,
    title: string,
    message: string,
    data?: Record<string, any>,
  ): Promise<void> {
    // Simulate push notification
    console.log(`Sending push notification to user ${userId}`)
    console.log(`Title: ${title}`)
    console.log(`Message: ${message}`)
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 300))
    
    console.log(`Push notification sent to user ${userId}`)
  }

  private async sendSmsNotification(
    userId: string,
    title: string,
    message: string,
    data?: Record<string, any>,
  ): Promise<void> {
    // Simulate SMS notification
    console.log(`Sending SMS notification to user ${userId}`)
    console.log(`Message: ${message}`)
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 200))
    
    console.log(`SMS notification sent to user ${userId}`)
  }

  public async close(): Promise<void> {
    await this.worker.close()
  }
}

