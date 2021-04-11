import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.formGroup = new FormGroup({
      imgUrl: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      roomsNr: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      m2: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  formSubmit() {
    const value = this.formGroup.value;

    const product = {
      image_url: value.imgUrl,
      m2: value.m2.toString(),
      price: value.price.toString(),
      rooms: value.roomsNr.toString(),
      description: value.description,
      address: value.address,
      zip_code: "",
    }
    console.log(this.formGroup.value);
    this.productService.createProduct(product).subscribe(
      result => {
        this.router.navigateByUrl("/account/products");
      }, error => {
        window.alert("ERROR");
      }
    )

  }

}
