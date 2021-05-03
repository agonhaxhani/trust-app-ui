import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterUrls} from '../../../shared/constants/RouterUrls';
import {IMAGEURLS} from '../../../shared/constants/GeneralConstant';
import {TokenService} from '../../../shared/services/auth/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  instagramUrl = IMAGEURLS.INSTAGRAM;
  logoWhite = IMAGEURLS.LOGO_WHITE;

  constructor() {
  }

  ngOnInit(): void {
  }


}
