import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/modules/shared/models/api-response.model.i.';
import { CreateOperation } from '../models/create-operation.model.i';
import { IOperation } from '../models/operation.model.i';

@Injectable()
export class OperationsService {
    constructor(private http: HttpClient){}

    createOperation(createOperation: CreateOperation) : Observable<ApiResponse<IOperation>>{
        return this.http.post<ApiResponse<IOperation>>('/operations',  createOperation );
    }

    getOperationByAccountId(accountId: string, startDate?: Date, endDate?: Date, localDate?: Date): Observable<ApiResponse<IOperation[]>>{
        if(startDate && endDate){
            return this.http.get<ApiResponse<IOperation[]>>('/operations', { params: { 'accountId': accountId, 'startDate': startDate.toISOString(), 'endDate': endDate.toISOString() }});
        }
        return this.http.get<ApiResponse<IOperation[]>>('/operations', { params: { 'accountId': accountId, localDate : localDate.toISOString()} });
    }
}
