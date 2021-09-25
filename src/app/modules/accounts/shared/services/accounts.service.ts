import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/modules/shared/models/api-response.model.i.';
import { CreateAccount } from '../models/create-account.model.i';
import { IAccount } from '../models/account.i';

@Injectable()
export class AccountsService {
    constructor(private http: HttpClient){}

    loadAccounts(userId: number) : Observable<ApiResponse<IAccount[]>>{
        return this.http.get<ApiResponse<IAccount[]>>('/accounts', {params : { 'userId' : userId.toString()}});
    }

    createAccount(createAccount: CreateAccount) : Observable<ApiResponse<IAccount>>{
        return this.http.post<ApiResponse<IAccount>>('/accounts',  createAccount );
    }
}
