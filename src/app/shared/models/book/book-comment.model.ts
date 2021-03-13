import {BaseModel} from '../base.model';
import {AccountUserModel} from "../account/account-user.model";
import {BookModel} from "./book.model";

export class BookCommentModel extends BaseModel {
  comment: string;
  applicationUser: AccountUserModel;
  book: BookModel;
}
