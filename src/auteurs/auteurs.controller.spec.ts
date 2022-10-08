import { Test, TestingModule } from '@nestjs/testing';
import { AuteursController } from './auteurs.controller';

describe('AuteursController', () => {
  let controller: AuteursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuteursController],
    }).compile();

    controller = module.get<AuteursController>(AuteursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
