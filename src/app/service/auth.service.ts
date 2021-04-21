import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_base = "http://127.0.0.1:8595/springboot-rest-api/";
  server_base_2 = "http://127.0.0.1:8595/springboot-rest-api/api/v2/";

  constructor(private http: HttpClient) { }

  send_post_without_tokens(credentials, type) {

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Accept':'*'
    // });
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    //  headers.append('Accept', '*');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');

    console.log(headers);
    return new Promise((resolve, reject) => {

      this.http.post(this.server_base+ type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



  public send_full_req_(credentials,endpoint){
    return this.http.post(`${this.server_base}/`+endpoint,JSON.stringify(credentials));
  }

  public full_response(credentials,endpoint){
    return this.http.post<any>(this.server_base + endpoint, JSON.stringify(credentials),
  {observe: 'response' as 'body'})
  /* .pipe(map(user => {
       return user;
  })); */
  }



  get_with_Auth(type) {
    const usertoken = JSON.parse(sessionStorage.getItem(environment.TOKEN_KEY));
    const httpHeader = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': '*',
          Authorization: 'Bearer ' +usertoken
        })
    };
    return new Promise((resolve, reject) => {
      this.http.get(this.server_base_2 + type, httpHeader)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
