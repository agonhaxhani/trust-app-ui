export class ResponsePageModel<T> {
  pageSize: number;
  pageNumber: number;
  offset: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  content: T[];
}

