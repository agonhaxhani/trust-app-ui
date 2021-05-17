import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {SwiperOptions} from 'swiper';
import { TokenService } from '../shared/services/auth/token.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: any;
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  user: any;

  constructor(private productService: ProductService,
              private tokenService: TokenService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.getProductData();
    this.user = this.tokenService.getData();
  }

  getProductData() {
    if (!this.productId) {
      return;
    }

    this.productService.getProductDetails(this.productId).subscribe(result => {
      this.product = result;
    });
  }
}
