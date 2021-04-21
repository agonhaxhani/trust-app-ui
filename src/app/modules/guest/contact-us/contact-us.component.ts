import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ContactUsService} from '../../../shared/services/contact-us.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  window = window;
  loadedNr = 0;

  constructor(private contactUsService: ContactUsService) { }

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
        console.log(result)
      },
      error => {
        console.log(error)
      }
    )

    //
    // this.contactUsService.submitForm(url, objectToSend).subscribe(
    //   result => console.log(result),
    //   error => console.log(error)
    // );
  }

}
