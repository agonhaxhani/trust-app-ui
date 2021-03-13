import {BaseModel} from '../base.model';

export class AuthorModel extends BaseModel {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  dateOfDeath: string;
  description: string;
  imageUrl: any;
}
