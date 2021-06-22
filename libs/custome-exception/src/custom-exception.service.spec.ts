import { Test, TestingModule } from '@nestjs/testing';
import { CustomException } from './custom-exception.exception';

describe('CustomExceptionService', () => {
  let service: CustomException;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomException],
    }).compile();

    service = module.get<CustomException>(CustomException);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
