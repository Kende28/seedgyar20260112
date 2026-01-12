import { Test, TestingModule } from '@nestjs/testing';
import { DolgozoController } from './dolgozo.controller';
import { DolgozoService } from './dolgozo.service';

describe('DolgozoController', () => {
  let controller: DolgozoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DolgozoController],
      providers: [DolgozoService],
    }).compile();

    controller = module.get<DolgozoController>(DolgozoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
