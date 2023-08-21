import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { ConfigModule } from '@nestjs/config';
import dbConfig from '../config/db.config';

@Module({
  imports: [ConfigModule.forFeature(dbConfig)],
  providers: [DbService],
  // controllers: [DbController]
})
export class DbModule {}
