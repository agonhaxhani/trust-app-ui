import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {ConfigsService} from '../../../shared/services/configs.service';
import {ConfigsModel} from '../../../shared/models/shared/Configs.model';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rentProducts = [];
  sellingProducts = [];
  cellsToShow = 0;
  configs: ConfigsModel;
  loading = true;

  constructor(private productService: ProductService,
              private configsService: ConfigsService) { }

  ngOnInit(): void {
    this.getSellingProducts();
    this.getRentProducts();
    this.changeSliderItemsnr();
    this.getConfigs();
  }

  getRentProducts() {
    const filters = `&_where[0][type]=QIRA&_where[1][done]=false`;

    this.productService.getProducts(filters)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
      result => {
        this.rentProducts = result;
      }
    );
  }

  getSellingProducts() {
    const filters = `&_where[0][type]=SHITJE&_where[1][done]=false`;

    this.productService.getProducts(filters)
      .pipe(finalize(() => this.loading = false))
      .subscribe(
      result => {
        this.sellingProducts = result;
      }
    );
  }

  getConfigs() {
    this.configsService.configsObservable.subscribe(
      result => {
        if (result) {
          this.configs = result;
        }
      }
    );
  }

  changeSliderItemsnr() {
    if (window.innerWidth <= 600) {
      this.cellsToShow = 1;
    } else if (window.innerWidth <= 1000) {
      this.cellsToShow = 2;
    } else {
      this.cellsToShow = 3;
    }
  }
}
