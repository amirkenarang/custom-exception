import { ExceptionFilter, Catch, ArgumentsHost, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { CUSTOM_EXCEPTION_OPTIONS } from './constants/custum-exceptions-options.constants';
import { CustomException } from './custom-exception.exception';
import { ErrorResponseDto } from './dto/error-response.dto';
import { CustomExceptionModuleOptions } from './interfaces/custom-exception-options.interface';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  constructor(
    @Inject(CUSTOM_EXCEPTION_OPTIONS)
    private options: CustomExceptionModuleOptions,
  ) {}

  catch(exception: CustomException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.status;

    const errorResponseDto = new ErrorResponseDto();

    errorResponseDto.service = this.options.serviceName;
    errorResponseDto.message = exception.message;
    errorResponseDto.errorCode = exception.errorCode;
    errorResponseDto.path = request.url;
    errorResponseDto.timestamp = new Date();
    errorResponseDto.details = {};

    response.status(status).json(errorResponseDto);
  }
}
