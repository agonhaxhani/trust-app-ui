import {BaseModel} from '../base.model';
import {AccountUserModel} from "../account/account-user.model";
import {BookModel} from "./book.model";
import {BorrowStatusEnum} from "../enums/borrow-status.enum";

export class BorrowModel extends BaseModel {
  borrowFrom: Date;
  borrowUntil: Date;
  applicationUser: AccountUserModel;
  book: BookModel;
  borrowStatus: BorrowStatusEnum;
}
