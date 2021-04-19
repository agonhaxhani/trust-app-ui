import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.activatedRoute.queryParams.subscribe(params => {
      const type = params.type;
      const rooms = params.rooms;
      const address = params.address;
      const bathroomNr = params.bathroomNr;
      const pricegt = params.pricegt;
      const pricelt = params.pricelt;

      this.formGroup = new FormGroup({
        type: new FormControl(type ? type : 'null'),
        rooms: new FormControl(rooms ? rooms : ''),
        pricegt: new FormControl(pricegt ? pricegt : ''),
        pricelt: new FormControl(pricelt ? pricelt : ''),
        address: new FormControl(address ? address : ''),
        bathroomNr: new FormControl(bathroomNr ? bathroomNr : ''),
      });
    });
  }


  searchSubmit() {
    const value = this.formGroup.value;

    this.router.navigate(['/product/list'], {queryParams: {
        rooms: value.rooms,
        type: value.type && value.type !== 'null' ?  value.type : '',
        address: value.address,
        bathroomNr: value.bathroomNr,
        pricegt: value.pricegt,
        pricelt: value.pricelt,
      }});
  }

  clearFilters() {
    this.initForm();
    this.router.navigate(['/product/list']);
  }

}
