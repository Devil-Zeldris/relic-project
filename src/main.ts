import { NestFactory } from "@nestjs/core";
import { RelicProjectApp } from "#src/RelicProject.module.js";
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(RelicProjectApp);
  app.useGlobalPipes(new ValidationPipe())
    .setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
