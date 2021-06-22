export class ErrorResponseDto {
  message: string;
  status: number;
  errorCode: string;
  timestamp: Date;
  path: string;
  service: string;
  details: object;
}
