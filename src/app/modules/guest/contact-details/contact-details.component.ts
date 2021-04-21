import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../../../shared/services/contact-us.service';
import {ActivatedRoute} from '@angular/router';
import {SnackbarService} from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contactId: any;
  contact: any;

  constructor(private contactService: ContactUsService,
              private snackbarService: SnackbarService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactId = this.activatedRoute.snapshot.params.id;
    this.getContactDetails();
  }

  getContactDetails() {
    this.contactService.getContactsDetails(this.contactId).subscribe(result => {
        this.contact = result;
        this.updateContact();
      },
      error => {
        this.snackbarService.errorSnackBar("Gabim gjate marrjes se detajeve!")
      })
  }

  updateContact() {
    this.contact.seen = true;
    this.contactService.updateContact(this.contact).subscribe(result => {
        this.contact = result;
      },
      error => {
        this.snackbarService.errorSnackBar("Gabim gjate listimit te kontakteve!")
      })
  }

}
