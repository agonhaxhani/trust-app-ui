import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestUrls} from '../../constants/RequestUrls';
import {LoginModel} from '../../models/auth/login.model';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(loginModel: LoginModel) {
    return this.http.post<any>(RequestUrls.AUTHENTICATION.LOGIN, loginModel);
  }
}
