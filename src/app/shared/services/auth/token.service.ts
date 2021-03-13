import jwt_decode from 'jwt-decode';
import {Injectable} from '@angular/core';
import {GeneralConstant} from '../../constants/GeneralConstant';
import {BorrowModel} from "../../models/book/borrow.model";

@Injectable()
export class TokenService {

  constructor() { }

  public saveToken(token): void {
    localStorage.setItem(GeneralConstant.LOCALSTORAGE_TOKEN, token);
  }

  public geToken(): string {
    return localStorage.getItem(GeneralConstant.LOCALSTORAGE_TOKEN);
  }

  public getData(): any {
    const token = this.geToken();
    if (token) {
      return jwt_decode(token);
    }
    return;
  }

  public getBorrowedBook(): BorrowModel {
    if (this.getData()) {
      return this.getData().borrow;
    }
    return;
  }

  public isTokenExpired() {
    if (!this.geToken()) {
      return;
    }
    const expirationDate = new Date(this.getData().exp);
    const currentDate = new Date();

    return currentDate > expirationDate;
  }
}
