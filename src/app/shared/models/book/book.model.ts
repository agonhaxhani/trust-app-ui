import {BaseModel} from '../base.model';
import {AuthorModel} from './author.model';
import {EditionModel} from "./edition.model";

export class BookModel extends BaseModel {
  name: string;
  description: string;
  imageUrl: string;
  publicationYear: any;
  author: AuthorModel;
  edition: EditionModel;
  category: any;
  shelf: string;
}
