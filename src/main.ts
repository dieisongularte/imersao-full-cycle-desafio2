import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './database.provider';
import { TransactionModel } from './Models/transaction.model';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  sequelize.addModels([TransactionModel]);
  sequelize.sync({ force: true });
  await app.listen(3000);
}
bootstrap();
