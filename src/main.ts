import { NestFactory } from "@nestjs/core";
import { RelicProjectApp } from "./RelicProject.module";
import { ValidationPipe } from "@nestjs/common"
import dotenv from "dotenv/config"

async function bootstrap() {
  const app = await NestFactory.create(RelicProjectApp);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}

bootstrap();
