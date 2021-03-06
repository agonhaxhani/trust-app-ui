import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { FileService } from 'src/app/shared/services/file.service';
import {ProductService} from 'src/app/shared/services/product.service';
import {ProductTypeEnum} from '../../../shared/models/product/product-type.enum';
import {SnackbarService} from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup;
  uploads = [];
  uploadStorage: any;
  productToSave: any;
  productFiles = [];
  productId: any;
  productType = {
    qira: ProductTypeEnum.qira,
    shitje: ProductTypeEnum.shitje,
  };
  productLatitude: number;
  productLongitude: number;

  @ViewChild('map') mapElement: ElementRef;
  map: google.maps.Map;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private fileService: FileService,
              private snackBarService: SnackbarService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.getProductData();
  }

  initform() {
    this.formGroup = new FormGroup({
      title: new FormControl(this.productToSave ? this.productToSave.title : '', Validators.required),
      type: new FormControl(this.productToSave ? this.productToSave.type : '', Validators.required),
      price: new FormControl(this.productToSave ? this.productToSave.price : ''),
      roomsNr: new FormControl(this.productToSave ? this.productToSave.rooms : ''),
      address: new FormControl(this.productToSave ? this.productToSave.address : ''),
      m2: new FormControl(this.productToSave ? this.productToSave.m2 : ''),
      balconyNr: new FormControl(this.productToSave ? this.productToSave.balconyNr : ''),
      bathroomNr: new FormControl(this.productToSave ? this.productToSave.bathroomNr : ''),
      storageNr: new FormControl(this.productToSave ? this.productToSave.storageNr : ''),
      parking: new FormControl(this.productToSave ? this.productToSave.parking : false),
      done: new FormControl(this.productToSave ? this.productToSave.done : false),
      description: new FormControl(this.productToSave ? this.productToSave.description : ''),
    });
  }

  initMap(afterFormInit?: boolean) {
    let myLatLng = { lat: 42.8914, lng: 20.8660 };

    if (afterFormInit) {
      myLatLng = {lat: this.productLatitude, lng: this.productLongitude};
    }

    const map = new google.maps.Map(
      this.mapElement.nativeElement as HTMLElement,
      {
        zoom: 15,
        center: myLatLng,
      }
    );

    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
    });

    google.maps.event.addListener(map, 'click', (event) => {
      const latitude = event.latLng.lat();
      const longitude = event.latLng.lng();

      this.productLatitude = latitude;
      this.productLongitude = longitude;

      marker.setPosition(
        {lat: latitude, lng: longitude}
      );
    });
  }

  ngAfterViewInit() {
    this.initMap();
  }

  onSelectFile(event) {
    const files = event.target.files;
    this.snackBarService.infoSnackBar("Ju lutem prisni deri sa te upload-ohen file-at");

    if (files) {
      for (const element of files){
        this.uploadToS3(element);
      }
    }
  }

  formSubmit() {
    if (!this.formGroup.valid) {
      return;
    }
    const value = this.formGroup.value;

    this.productToSave = {
      title: value.title.toString(),
      type: value.type.toString(),
      m2: value.m2 ? value.m2 : '',
      price: value.price ? value.price : 0,
      rooms: value.roomsNr ? value.roomsNr.toString() : '',
      description: value.description,
      address: value.address,
      balconyNr: value.balconyNr ? value.balconyNr : 0,
      bathroomNr: value.bathroomNr ? value.bathroomNr : 0,
      storageNr: value.storageNr,
      parking: value.parking,
      done: value.done,
      productLatitude: this.productLatitude,
      productLongitude: this.productLongitude,
      product_files: this.productFiles
    };

    this.snackBarService.infoSnackBar("Produkti duke u ruajtur");

    if (this.productId) {
      this.productToSave.id = this.productId;
      this.productService.updateProduct(this.productToSave).subscribe(
        result => {
          this.snackBarService.successSnackBar("Produkti u ruajt me sukses");
          this.router.navigateByUrl('/product/list');
        }, error => {
          this.snackBarService.errorSnackBar("Gabim gjate ruajtjes se produktit");
        }
      );
      return;
    }

    this.productService.createProduct(this.productToSave).subscribe(
      result => {
        this.router.navigateByUrl('/product/list');
        this.snackBarService.successSnackBar("Produkti u ruajt me sukses");
      }, error => {
        this.snackBarService.errorSnackBar("Gabim gjate ruajtjes se produktit");
      }
    );
  }

  removeImage(productFile, index) {
    this.fileService.removeFromS3(productFile.fileData).subscribe(
      result => {
        this.fileService.removeFromDb(productFile).subscribe(result2 => {
          this.productFiles.splice(index, 1);
        });
      }
    );
  }

  uploadToS3(file) {
    const formData: FormData = new FormData();

    formData.append('files', file);
    formData.append('fileInfo', '{ "alternativeText":"", "caption":"", "name":"" }');

    this.fileService.uploadToS3(formData).subscribe(
      result => {
        this.saveFilesToDb(result, file);
      }
    );
  }

  saveFilesToDb(resultArray, file) {
    const object = {
      fileData: resultArray[0]
    };

    this.fileService.saveToDb(object).subscribe(result => {
      this.productFiles.push(result);
    });
  }



  /////////////// UPDATE PAGE //////////////////////////

  getProductData() {
    if (!this.productId) {
      this.initform();
      return;
    }

    this.productService.getProductDetails(this.productId).subscribe(result => {
      this.productToSave = result;
      this.productFiles = this.productToSave.product_files;
      this.initform();
      this.productLatitude = this.productToSave.productLatitude;
      this.productLongitude = this.productToSave.productLongitude;
      this.initMap(true);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(result => {

      this.productFiles.forEach((item, index) => {
        this.removeImage(item, index);
      });

      this.router.navigateByUrl('/product/list');
    });
  }

}
