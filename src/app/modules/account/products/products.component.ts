import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsFormComponent } from '../products-form/products-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private dialog: MatDialog,
              private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.dialog.open(ProductsFormComponent);
  }
}
