import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  // constructor(private configService: ConfigService) {}
  constructor(
    @Inject(appConfig.KEY)
    private config: ConfigType<typeof appConfig>,
  ) {}

  getHello(): string {
    this.logger.debug('getHello');
    // const host = this.configService.get<string>('app.host');
    // const port = this.configService.get<number>('app.port');
    // const dbHost = this.configService.get<string>('db.host');
    // const dbPort = this.configService.get<number>('db.port');

    const host = this.config.host;
    const port = this.config.prot;

    this.logger.debug('host : ' + host);
    this.logger.debug('port : ' + port);
    // this.logger.debug('dbHost : ' + dbHost);
    // this.logger.debug('dbPort : ' + dbPort);
    return 'Hello World!';
  }
}
