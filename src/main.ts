import { NestFactory } from "@nestjs/core";
import { RelicProjectApp } from "./RelicProject.module";
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(RelicProjectApp);
  app.useGlobalPipes(new ValidationPipe())
    .setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
