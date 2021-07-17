import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ContactUsService} from '../../../shared/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formGroup: FormGroup;
  window = window;
  formSubmitted = false;
  responseSuccess = undefined;

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    this.formSubmitted = true;

    const value = this.formGroup.value;

    this.contactUsService.createContact(value).subscribe(
      result => {
        this.initForm();
        setTimeout(() => this.responseSuccess = true, 1500);
      },
      error => {
        setTimeout(() => this.responseSuccess = false, 1500);
        this.initForm();
      }
    )
  }

}
