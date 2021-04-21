import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ContactUsService} from '../../../shared/services/contact-us.service';
import {NavigationStart, Router} from '@angular/router';
import {SnackbarService} from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formGroup: FormGroup;
  window = window;

  constructor(private contactUsService: ContactUsService,
              private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const value = this.formGroup.value;

    this.contactUsService.createContact(value).subscribe(
      result => {
        this.snackbarService.infoSnackBar("Kontakti eshte ruajtur me sukses");
        this.initForm();
      },
      error => {
        this.snackbarService.infoSnackBar("Gabim gjate ruajtjes se kontaktit");
      }
    )

    //
    // this.contactUsService.submitForm(url, objectToSend).subscribe(
    //   result => console.log(result),
    //   error => console.log(error)
    // );
  }

}
