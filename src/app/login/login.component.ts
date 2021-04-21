
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthService } from "../service/auth.service";
import { NotifyService } from "../service/notify.service";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  isLoginFailed: boolean = false;
  isLoggedIn: boolean = false;
  logindata = {username: "", password:""};
  login_error_message = "";
  logged_in_as = "";

  username_error = '';
  password_error = '';

  constructor(private router: Router, public authservice: AuthService,
    public notify: NotifyService, private http: HttpClient ) {

  }

  ngOnInit() {}

  create_login(){
    //reset data
    this.username_error = "";
    this.password_error = "";
    this.isLoginFailed = false;
    this.login_error_message = "";


    if(this.logindata.username === ""){
      this.isLoginFailed = true;
      this.login_error_message = "Missing username";
      this.username_error = this.login_error_message;
      //this.notify.showToast("error",this.login_error_message,"Login Error");

    }else if(this.logindata.password === ""){
      this.isLoginFailed = true;
      this.login_error_message = "Missing password";
      this.password_error = this.login_error_message;
    }else{

     this.http.post<any>(this.authservice.server_base + "login", JSON.stringify(this.logindata),
     {observe: 'response' as'body'})
     .subscribe((res:HttpResponse<any>)=>{

       let myauth = res.headers.get('Authorization')
       console.log( res.headers.get('Authorization'));

       //create sessiion storage
     sessionStorage.setItem(environment.TOKEN_KEY,JSON.stringify(myauth));

 //route to main page
 this.router.navigate(['/customers']);

      }, (err) => {
        console.log(err);
        this.isLoginFailed = true;
        this.login_error_message = "Incorrect username or password";

        });
    }
  }

}
