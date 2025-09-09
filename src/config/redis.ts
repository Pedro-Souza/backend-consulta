import { createClient } from 'redis'

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
})

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err)
})

redisClient.on('connect', () => {
  console.log('Redis Client Connected')
})

// Connect to Redis
;(async () => {
  await redisClient.connect()
})()

// Graceful shutdown
process.on('beforeExit', async () => {
  await redisClient.quit()
})

export default redisClient

