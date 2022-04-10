import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionDTO } from '../../DTOs/transaction.dto';

@Controller('transactions')
export class TransactionsController {

    constructor(private readonly transactionService: TransactionService) {};
    
    @Get()
    async getAll()
    {
        return this.transactionService.getAll();
    }

    @Post()
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    create(@Body() transactionDTO: TransactionDTO)
    {
        return this.transactionService.create(transactionDTO);
    }
}
