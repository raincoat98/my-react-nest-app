import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { Logger, LogLevel } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: (process.env.LOG_LEVEL?.split(',') as LogLevel[]) || [
      'error',
      'warn',
      'log',
    ],
  });
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');
  logger.log('Application starting...');

  // 전역 프리픽스 설정
  app.setGlobalPrefix('api');

  // CORS 설정
  const corsOrigins = configService
    .get<string>('CORS_ORIGINS')
    ?.split(',')
    .map((origin) => origin.trim());
  const corsMethods = configService
    .get<string>('CORS_METHODS')
    ?.split(',')
    .map((method) => method.trim());
  const corsHeaders = configService
    .get<string>('CORS_ALLOWED_HEADERS')
    ?.split(',')
    .map((header) => header.trim());

  const corsOptions: CorsOptions = {
    origin: corsOrigins || ['http://localhost:3000'],
    methods: corsMethods || [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'OPTIONS',
    ],
    allowedHeaders: corsHeaders || [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
    ],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('Likes API')
    .setDescription('좋아요 API 문서')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = configService.get<number>('PORT', 3000);
  console.log(`Application is running on port ${port}`);

  await app.listen(port);
}
bootstrap();
