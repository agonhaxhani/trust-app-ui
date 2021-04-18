import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/models/product/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails(id) {
    this.router.navigate([`/product/details/${id}`])
  }

}
