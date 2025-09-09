export enum HttpExceptionEnum {
  UNPROCESSED_ENTITY = "UNPROCESSED_ENTITY",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  BAD_REQUEST = "BAD_REQUEST",
  UNAUTHORIZED = "UNAUTHORIZED",
  VALIDATION_EXCEPTION = "VALIDATION_EXCEPTION",
  NOT_FOUND = "NOT_FOUND",
}

export default class BaseError extends Error {
  public message: string;

  public errors: any;

  public status: number;

  constructor(message?: string, errors?: any, status = 500) {
    super(message);
    this.message = message || HttpExceptionEnum.INTERNAL_ERROR;
    this.errors = errors || {};
    this.status = status;
  }
}
