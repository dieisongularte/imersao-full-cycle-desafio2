import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { TransactionEnum } from 'src/enums/transaction.enum';

export class TransactionDTO {
    @IsString({
        message: "type deve ser uma string."
    })
    @IsNotEmpty({
        message: "type não pode ser vazio."
    })
    @IsEnum(TransactionEnum, {
        message: "type deve ser: credit ou debit."
    })
    type: string;

    @IsNotEmpty({
        message: "amount não pode ser vazio."
    })
    @IsInt({
        message: "amount deve ser um número."
    })
    amount: number;
}
