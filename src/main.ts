import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

global['fetch'] = require('node-fetch');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('CDI Rest API')
    .setDescription('Here are the link to the Rest API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: false,
    credentials: false,
  });
  app.setGlobalPrefix('api');
  Logger.log('Listened on PORT 3000');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
