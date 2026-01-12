import { Test, TestingModule } from '@nestjs/testing';
import { DolgozoService } from './dolgozo.service';

describe('DolgozoService', () => {
  let service: DolgozoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DolgozoService],
    }).compile();

    service = module.get<DolgozoService>(DolgozoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
