import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common"
import { RelicProjectApp } from "@src/RelicProject.module.js";

async function bootstrap() {
  const app = await NestFactory.create(RelicProjectApp);
  app.useGlobalPipes(new ValidationPipe())
    .setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
