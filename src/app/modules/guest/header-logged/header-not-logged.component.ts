import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouterUrls} from '../../../shared/constants/RouterUrls';
import {IMAGEURLS} from '../../../shared/constants/GeneralConstant';
import {TokenService} from '../../../shared/services/auth/token.service';
import {SnackbarService} from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-header-not-logged',
  templateUrl: './header-not-logged.component.html',
  styleUrls: ['./header-not-logged.component.scss']
})
export class HeaderNotLogged implements OnInit {
  logoUrl = IMAGEURLS.LOGO;
  avatarUrl = IMAGEURLS.AVATAR;
  user: any;

  constructor(private router: Router, private tokenService: TokenService,
              private snackbarService: SnackbarService) {
    this.user = tokenService.getData();
  }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.user = '';
    this.router.navigateByUrl('/');
    this.snackbarService.successSnackBar("Useri u c'kyq me sukses");
  }
}
