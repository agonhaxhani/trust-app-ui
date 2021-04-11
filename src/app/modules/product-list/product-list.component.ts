import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productModel: ProductModel;
  @Input() products: [];

  constructor() { }

  ngOnInit(): void {
    this.productModel = new ProductModel();
    this.productModel.imageUrl = "https://scontent.fprn4-1.fna.fbcdn.net/v/t1.6435-9/168366115_128907035910667_3682889768939764891_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=T2674lbMwIMAX_LFcWc&_nc_ht=scontent.fprn4-1.fna&oh=cf98bf9d91f9c358190553de9f3f9c22&oe=608E684C";
    this.productModel.name = "Banese ne shitje";
    this.productModel.description = "";
  }

}
