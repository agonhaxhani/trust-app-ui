import { Component, OnInit } from '@angular/core';
import {ContactUsService} from '../../../shared/services/contact-us.service';
import {SnackbarService} from '../../../shared/services/snackbar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts = [];
  displayedColumns: string[] = ['name', 'email', 'phone', 'delete'];
  seenData = null;

  constructor(private contactService: ContactUsService,
              private router: Router,
              private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.getContacts(null);
  }

  getContacts(filterBySeen: any) {
    if (filterBySeen == null) {
      this.seenData = false;
    }
    this.contactService.getContacts(filterBySeen).subscribe(result => {
      this.contacts = result;
    },
      error => {
      this.snackbarService.errorSnackBar("Gabim gjate listimit te kontakteve!")
      })
  }

  goToDetails(id: any) {
    this.router.navigateByUrl('/contact-details/' + id)
  }

  filterData() {
    this.seenData = !this.seenData;
    this.getContacts(this.seenData);
  }

  deleteItem(id) {
    this.contactService.deleteContact(id).subscribe(result => {
      this.getContacts(null);
        this.snackbarService.successSnackBar("Kontakti u fshi me sukses");
    },
      error => {
      this.snackbarService.errorSnackBar("Gabim gjate fshirjes se kontaktit")
      })
}

}
