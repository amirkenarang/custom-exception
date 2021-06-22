import { DynamicModule, Module } from '@nestjs/common';
import { CUSTOM_EXCEPTION_OPTIONS } from './constants/custum-exceptions-options.constants';
import { CustomExceptionModuleOptions } from './interfaces/custom-exception-options.interface';

@Module({})
export class CustomExceptionModule {
  static forRoot(options: CustomExceptionModuleOptions): DynamicModule {
    return {
      module: CustomExceptionModule,
      providers: [
        {
          provide: CUSTOM_EXCEPTION_OPTIONS,
          useValue: options,
        },
      ],
      exports: [
        {
          provide: CUSTOM_EXCEPTION_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
