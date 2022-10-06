import { Test, TestingModule } from '@nestjs/testing';
import { ChantController } from './chant.controller';

describe('ChantController', () => {
  let controller: ChantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChantController],
    }).compile();

    controller = module.get<ChantController>(ChantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
