import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterUrls} from '../../../shared/constants/RouterUrls';
import {IMAGEURLS} from '../../../shared/constants/GeneralConstant';
import {TokenService} from '../../../shared/services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl = IMAGEURLS.LOGO;
  avatarUrl = IMAGEURLS.AVATAR;
  tokenData: any;
  resetPassword = RouterUrls.ACCOUNT.MANAGE + '/' + RouterUrls.ACCOUNT.RESET_PASSWORD;

  constructor(private router: Router, private tokenService: TokenService) {
    this.tokenData = tokenService.getData();
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl(RouterUrls.GUEST.BASE_MODULE);
  }

}
