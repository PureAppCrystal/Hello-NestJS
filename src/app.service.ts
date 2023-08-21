import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {}

  getHello(): string {
    this.logger.debug('getHello');
    const host = this.config.host;
    const port = this.config.port;
    this.logger.debug('host : ' + host);
    this.logger.debug('port : ' + port);
    return 'Hello World!';
  }

  getHelloV2(name: string) {
    return `Hello, ${name}!`;
  }
}
