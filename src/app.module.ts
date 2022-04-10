import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsController } from './controllers/transactions/transactions.controller';
import { TransactionService } from './services/transaction/transaction.service';

@Module({
  imports: [],
  controllers: [AppController, TransactionsController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
