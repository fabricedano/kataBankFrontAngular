import { ApiError } from 'src/app/modules/shared/models/api-error.i';
import { IOperation } from '../models/operation.model.i';

export interface IOperationListState {
    hasSuccessLoadOperations: boolean;
    hasLoadOperationsError: boolean;
    errorMessage: ApiError;
    operations: IOperation[];
}