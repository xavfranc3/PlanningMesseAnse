import { ClassSerializerInterceptor, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory, Reflector } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);

  const config: ConfigService = app.get(ConfigService);


  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

  app.use(cookieParser())

  app.setGlobalPrefix("api");

  const port: number = config.get<number>("PORT");

  await app.listen(port, () => {
    console.log("WEB", `http://localhost:${port}`);
  });
}

bootstrap();
