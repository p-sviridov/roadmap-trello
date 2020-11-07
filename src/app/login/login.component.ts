import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  name?: string;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    const isAuth = this._authService.getUser()
      .pipe(
        map(user => !!user)
      );

    if (isAuth) {
      this._router.navigate(['/dashboard']);
    }
  }

  async register(): Promise<void> {
    await this._authService.register(this.email, this.password, this.name);
    this._router.navigate(['/dashboard']);
  }

  async login(): Promise<void> {
    await this._authService.login(this.email, this.password);
    this._router.navigate(['/dashboard']);
  }
}
