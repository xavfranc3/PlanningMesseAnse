import { Test, TestingModule } from '@nestjs/testing';
import { ChantService } from './chant.service';

describe('ChantService', () => {
  let service: ChantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChantService],
    }).compile();

    service = module.get<ChantService>(ChantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
