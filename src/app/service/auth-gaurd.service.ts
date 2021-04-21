import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthGaurdService {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = sessionStorage.getItem(environment.TOKEN_KEY);
    console.log(!(token === null));


    // return !(token === null);
    if (token === null) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
