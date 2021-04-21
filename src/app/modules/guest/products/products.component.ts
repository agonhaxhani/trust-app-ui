import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../shared/services/auth/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  user: any;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getData();
  }
}
