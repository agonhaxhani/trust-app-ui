import { Component } from '@angular/core';
import {TokenService} from "./shared/services/auth/token.service";
import * as moment from 'moment';
import {BookModel} from "./shared/models/book/book.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  daysLeft: number;
  bookToReturn: BookModel;

  constructor(private tokenService: TokenService) {
    this.getDateToReturnBook();
  }

  getDateToReturnBook() {
    const borrowed = this.tokenService.getBorrowedBook();
    if (!borrowed) {
      return;
    }
    this.bookToReturn = borrowed.book;

    const dateToReturn = moment(new Date(borrowed.borrowUntil));
    const todayDate = moment();
    this.daysLeft = dateToReturn.diff(todayDate, 'days');
  }
}
