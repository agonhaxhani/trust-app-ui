import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../../../shared/models/auth/login.model';
import {TokenService} from '../../../shared/services/auth/token.service';
import {Router} from '@angular/router';
import {RouterUrls} from '../../../shared/constants/RouterUrls';
import {GeneralConstant, IMAGEURLS} from '../../../shared/constants/GeneralConstant';
import {finalize} from "rxjs/operators";
import {CustomSnackbarService} from "../../../shared/services/snackbar-service.service";
import {SnackbarService} from '../../../shared/services/snackbar.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  logoUrl = IMAGEURLS.LOGO;
  loading = false;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBarService: SnackbarService,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.formGroup.invalid) {
      return;
    }

    const loginModel: LoginModel = {
      email: this.formGroup.get('username').value,
      password: this.formGroup.get('password').value,
    };

    this.loading = true;

    this.authService.authenticate(loginModel)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        result => {
          this.snackBarService.successSnackBar('User-i u logua me sukses');
          this.tokenService.saveToken(result.data.token);
          location.href = environment.baseHref;
        },
        error => {
          this.snackBarService.errorSnackBar('Gabim ne username ose password');
        });
  }

}
