// import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,RouterState } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  base_url: string;
  
    constructor(private router: Router
        , private authService: AuthService) {}
        // state: RouterState = this.router.routerState;
        
        // snapshot: RouterStateSnapshot = this.state.snapshot;
        // root: ActivatedRouteSnapshot = this.snapshot.root;
        // child = this.root.firstChild;
        // id: Observable<string> = child.params.map(p => p.id);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Check to see if a user has a valid token
        if (this.authService.isLoggedIn()) {
            // If they do, return true and allow the user to load app
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        });
        return false;
    }

  // constructor() { }
}
