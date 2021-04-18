import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { FileService } from 'src/app/shared/services/file.service';
import {ProductService} from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  formGroup: FormGroup;
  uploads = [];
  uploadStorage: any;
  productToSave: any;
  productFiles = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private fileService: FileService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      roomsNr: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      m2: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSelectFile(event) {
    const files = event.target.files;

    if (files) {
      for (const element of files){
        this.uploadToS3(element);
        
      }
    }
  }

  formSubmit() {
    const value = this.formGroup.value;

    this.productToSave = {
      title: value.title.toString(),
      m2: value.m2.toString(),
      price: value.price.toString(),
      rooms: value.roomsNr.toString(),
      description: value.description,
      address: value.address,
      zip_code: '',
      product_files: this.productFiles
    };

    this.productService.createProduct(this.productToSave).subscribe(
      result => {
        this.router.navigateByUrl('/account/products');
      }, error => {
        window.alert('ERROR');
      }
    );
  }

  removeImage(productFile, index) {
    debugger;
    this.fileService.removeFromS3(productFile.fileData).subscribe(
      result => {
        this.fileService.removeFromDb(productFile).subscribe(result2 => {
          this.productFiles.splice(index, 1);
        })
      }
    )
  }

  uploadToS3(file) {
    let formData: FormData = new FormData();

    formData.append("files", file);
    formData.append("fileInfo", '{ "alternativeText":"", "caption":"", "name":"" }');

    this.fileService.uploadToS3(formData).subscribe(
      result => {
        this.saveFilesToDb(result, file);
      }
    )
  }

  saveFilesToDb(resultArray, file) {
    const object = {
      fileData: resultArray[0]
    };

    this.fileService.saveToDb(object).subscribe(result => {
      this.productFiles.push(result);
    })
  }

}
