import { AuthService } from './../service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Config } from 'protractor';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


 customers_list = [];
 p:number = 1;
 customerid:any
 table_head = ['customerId','email','firstName','pin']
 config: Config;

  constructor(private auth: AuthService, private http: HttpClient) {

   }

  ngOnInit() {

    this.get_customers();

  }
  get_balance(data){
    alert(data)
  }

  search(){
    if(this.customerid == null){
      this.ngOnInit();
    }
    else{
      this.customers_list =  this.customers_list.filter(e=>{
        return e.customerId.match(this.customerid)
      })
    }
  }


  get_customers(){


    // Api connections
    this.auth.get_with_Auth('customers/').then((data: any) => {
      let myresponsedata: any = data;
      console.log(myresponsedata);
      this.customers_list = myresponsedata;
    }, (err) => {

      console.log(err);

    });
  }

}
