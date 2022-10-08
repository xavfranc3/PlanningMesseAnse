import { Test, TestingModule } from '@nestjs/testing';
import { AuteursService } from './auteurs.service';

describe('AuteursService', () => {
  let service: AuteursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuteursService],
    }).compile();

    service = module.get<AuteursService>(AuteursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
