import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';
import {ProductService} from '../../../shared/services/product.service';
import {RequestUrls} from '../../../shared/constants/RequestUrls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rentProducts = [];
  sellingProducts = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getSellingProducts();
    this.getRentProducts();
  }

  getRentProducts() {
    const filters = `&_where[0][type]=QIRA`;

    this.productService.getProducts(filters).subscribe(
      result => {
        this.rentProducts = result;
      }
    );
  }

  getSellingProducts() {
    const filters = `&_where[0][type]=SHITJE`;

    this.productService.getProducts(filters).subscribe(
      result => {
        this.sellingProducts = result;
      }
    );
  }


}
