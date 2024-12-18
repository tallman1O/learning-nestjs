import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Use validation pipes globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Masterclass - Blog app API')
    .setDescription('Use the Base API URL as http://localhost:300')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense('MIT Liscense', 'http://localhost:3000/license')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .build();

  //Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
