import { ApiError } from 'src/app/modules/shared/models/api-error.i';

export interface ICreateOperationState {
    hasSuccessCreateOperation: boolean;
    hasCreateOperationError: boolean;
    errorMessage: ApiError;
    accountId: number;
}
