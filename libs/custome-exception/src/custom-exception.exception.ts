export class CustomException extends Error {
  message: string;
  status: number;
  errorCode: string;
  details: object;

  constructor(inputs: CustomExceptionInputType, error?: Error) {
    if (error && error instanceof CustomException) {
      return error;
    }
    super(inputs.message);
    this.message = inputs.message;
    this.status = inputs.status;
    this.details = inputs.details || {};
    this.errorCode = inputs.errorCode;
  }
}
