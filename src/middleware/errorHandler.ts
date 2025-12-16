import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export class AppError extends Error {
  public statusCode: number
  public isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let statusCode = 500
  let message = 'Internal Server Error'

  if (err instanceof AppError) {
    statusCode = err.statusCode
    message = err.message
  } else if (err instanceof ZodError) {
    statusCode = 400
    message = 'Validation error'
  } else if (err.name === 'ValidationError') {
    statusCode = 400
    message = err.message
  } else if (err.name === 'CastError') {
    statusCode = 400
    message = 'Invalid ID format'
  }

  const response = {
    success: false,
    error: message,
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(err)
  }

  res.status(statusCode).json(response)
}
