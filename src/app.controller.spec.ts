import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const envConfig = ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    // load: [configuration],
    load: [appConfig],
  });

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      imports: [envConfig],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('hello', () => {
    it('returns a default message', () => {
      jest.spyOn(appService, 'getHelloV2').mockReturnValue('Hey~');
      expect(appController.hello()).toEqual({ message: 'Hey~' });
      expect(appService.getHelloV2).toBeCalledTimes(1);
      expect(appService.getHelloV2).toBeCalledWith('World');
    });

    it('returns a personalize message', () => {
      jest.spyOn(appService, 'getHelloV2').mockReturnValue('Hello, John!');
      expect(appController.hello('John')).toEqual({ message: 'Hello, John!' });
      expect(appService.getHelloV2).toBeCalledTimes(1);
      expect(appService.getHelloV2).toBeCalledWith('John');
    });
  });
});
