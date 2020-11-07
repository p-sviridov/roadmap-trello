import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUser().pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if(!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        } else {
          console.log("good job!");
        }
      })
    )
  }
  
}
