import { Injectable } from '@nestjs/common';
import { TransactionInterface } from '../../interfaces/transaction.interface';
import { TransactionModel } from '../../Models/transaction.model';
import { TransactionDTO } from '../../DTOs/transaction.dto';

@Injectable()
export class TransactionService {

    async getAll(): Promise<TransactionInterface[]>
    {
        return await TransactionModel.findAll();
    }

    async create(transactionDTO: TransactionDTO): Promise<TransactionInterface> {
        return await TransactionModel.create({
            type: transactionDTO.type,
            amount: transactionDTO.amount
        });
    }
}
