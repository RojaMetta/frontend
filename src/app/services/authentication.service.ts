import { HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient : HttpClient ) { }


validateUser(email : string) : Observable<User>
{
return this.httpClient.get<User>(`http://localhost:8080/api/v1/users/validateUser/${email}`) 
}
getUsers() : Observable<Array<User>>{
  return  this.httpClient.get<Array<User>>('http://localhost:3000/users');
}
addUser(user: User) : Observable<User>{
  return this.httpClient.post<User>('http://localhost:3000/users',user);
  }

setBearerToken(token : string)
{
   sessionStorage.setItem('bearerToken',token);
}

getBearerToken()
{
  return sessionStorage.getItem('bearerToken');
}


}
