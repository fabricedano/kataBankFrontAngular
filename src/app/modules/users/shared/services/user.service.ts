import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/login-response.model.i';
import { ApiResponse } from 'src/app/modules/shared/models/api-response.model.i.';

@Injectable()
export class UserService {
    constructor(private http: HttpClient){}

    logUser(email: string, password: string) : Observable<ApiResponse<LoginResponse>>{
        return this.http.post<ApiResponse<LoginResponse>>('/users/login', {email : email, password: password});
    }

    signUpUser(name: string, email: string, address: string, password: string) : Observable<ApiResponse<LoginResponse>>{
        return this.http.post<ApiResponse<LoginResponse>>('/users', {name: name, email : email,  address: address, password: password});
    }
}
