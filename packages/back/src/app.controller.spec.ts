import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('ping', () => {
    it('should return date and version', () => {
      const result = appController.ping();
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('version');
      expect(result).toHaveProperty('now');
    });
  });
});
