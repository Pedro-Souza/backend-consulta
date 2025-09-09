import { Job as BullJob } from 'bullmq'
import { Worker } from 'bullmq'
import redisClient from '@/config/redis'
import { JobQueueData } from '@/types'

export class ProcessingWorker {
  private worker: Worker
  constructor() {
    this.worker = new Worker(
      'processing',
      async (job: BullJob<JobQueueData>) => {
        await this.processJob(job)
      },
      {
        connection: redisClient,
        concurrency: 5,
      },
    )

    this.setupEventHandlers()
  }

  private setupEventHandlers(): void {
    this.worker.on('completed', async (job: BullJob) => {
      console.log(`Job ${job.id} completed successfully`)
    })

    this.worker.on('failed', async (job: BullJob, err: Error) => {
      console.error(`Job ${job?.id} failed:`, err.message)
    })

    this.worker.on('error', (err: Error) => {
      console.error('Worker error:', err)
    })
  }

  private async processJob(job: BullJob<JobQueueData>): Promise<any> {
    const { jobId, ...data } = job.data

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Process based on job name
    switch (job.name) {
      case 'data-processing':
        return await this.processDataProcessing(data)
      case 'file-upload':
        return await this.processFileUpload(data)
      case 'email-send':
        return await this.processEmailSend(data)
      default:
        throw new Error(`Unknown job type: ${job.name}`)
    }
  }

  private async processDataProcessing(data: any): Promise<any> {
    // Simulate data processing
    const result = {
      processed: true,
      timestamp: new Date().toISOString(),
      data: data,
    }

    return result
  }

  private async processFileUpload(data: any): Promise<any> {
    // Simulate file upload processing
    const result = {
      uploaded: true,
      fileId: `file_${Date.now()}`,
      timestamp: new Date().toISOString(),
      data: data,
    }

    return result
  }

  private async processEmailSend(data: any): Promise<any> {
    // Simulate email sending
    const result = {
      sent: true,
      messageId: `msg_${Date.now()}`,
      timestamp: new Date().toISOString(),
      data: data,
    }

    return result
  }

  public async close(): Promise<void> {
    await this.worker.close()
  }
}

