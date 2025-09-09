import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

import passport from 'src/modules/User/http/guard/passport'

//import { errorHandler } from '@/middleware/errorHandler'
import consultRouter from './modules/Consult/http/route'
import organizationRouter from './modules/Organization/http/router'
import userRouter from './modules/User/http/routers'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Security middleware
app.use(helmet())

// CORS
app.use(cors())

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  })
})

// API routes
app.use('/api/v1/cpf', consultRouter);
app.use('/api/v1/organizations', organizationRouter);
app.use('/api/v1/users', userRouter);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
  })
})

// Error handling middleware
//app.use(errorHandler)

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully')
  process.exit(0)
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📊 Environment: ${process.env.NODE_ENV}`)
  console.log(`🔗 Health check: http://localhost:${PORT}`)
})

