// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

import { Observable, take, map } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): Observable<any> {
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                if (user) {
                    return true;
                }
                else {
                    this.router.navigate(['/login']);
                    return false;
                }
            })
        )
    }
}
