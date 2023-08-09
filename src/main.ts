import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('HelloWorld API')
    .setDescription('this si a sample REST API')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  // env
  // const config = app.get < ConfigType < typeof appConfig >> appConfig.KEY;
  // const port = config.port;
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);

  await app.listen(port);
}
bootstrap();
