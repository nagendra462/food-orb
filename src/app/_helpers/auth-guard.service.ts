import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthenticationService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //if user is loggedin:allow the routing
    if(this.authService.isUserLoggedIn()){
      let currentRole=this.authService.getCurrentRole();
      console.log("currentrole"+currentRole);
      console.log("route.data.roles"+route.data.roles);
      if (route.data.roles && route.data.roles.indexOf(currentRole) === -1) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
    }
     
      return true;
    }else{
      //totally upto us if user is not logged in navigate to login component
      console.log("Nocurrentrole");
     this.router.navigate(['/login']);
      return false;
    }
  }
}
