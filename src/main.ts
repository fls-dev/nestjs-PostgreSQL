import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import * as cookieParser from 'cookie-parser';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.use(cookieParser());
  app.disable('x-powered-by')
  app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
  app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 99,
      }),
  );

  app.enableCors({
    allowedHeaders:"*",
    origin: "*",
    methods: 'GET, POST,HEAD,PATCH,',
    credentials: true,
  });
  await app.listen(3000);

}
bootstrap().then(r => console.log('start server'));