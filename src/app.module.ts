import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
// import configuration from './config/configuration';
import appConfig from './config/app.config';

const envConfig = ConfigModule.forRoot({
  cache: true,
  isGlobal: true,
  // load: [configuration],
  load: [appConfig],
});
@Module({
  imports: [UsersModule, HealthModule, envConfig, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
