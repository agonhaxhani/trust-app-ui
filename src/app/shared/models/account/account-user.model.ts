import {BaseModel} from '../base.model';
import {RoleModel} from './role.model';

export class AccountUserModel extends BaseModel {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  description: string;
  role: RoleModel;
}
