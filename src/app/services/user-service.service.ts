import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      requestagentid: '8d3d079d519988937b53eba286c0e8ba'
    }),
  };

  addNewUser(payload: any, company: string, uniqueId: string) {
    payload.company = company
    payload.uniqueId = uniqueId
    var userServiceURL = environment.usersService_addNewUserURL;
    return this.http.post(`${userServiceURL}`, payload, this.httpOptions);
  }

  updateUser(payload: any, company: string, uniqueId: string) {
    payload.company = company
    payload.uniqueId = uniqueId
    var userServiceURL = environment.usersService_addNewUserURL;
    return this.http.post(`${userServiceURL}`, payload, this.httpOptions);
  }

  getUserbyEmail(userEmail: string): any {
    var userServiceURL = environment.usersService_getUserbyEmailURL;
    userServiceURL = userServiceURL.replace("${userEmail}", userEmail);
    return this.http.get(`${userServiceURL}`, this.httpOptions);
  }

  getAllUsers(companyID: string): any {
    var userServiceURL = environment.usersService_getAllUsersURL;
    userServiceURL = userServiceURL.replace("${companyID}", companyID);
    return this.http.get(`${userServiceURL}`, this.httpOptions);
  }

}
