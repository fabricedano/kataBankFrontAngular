import { IOperation } from '../models/operation.model.i';

export interface IOperationsListAction {
    localDate: Date,
    startDate: Date,
    endDate: Date,
    accountId: string;
    operations: IOperation[];
}