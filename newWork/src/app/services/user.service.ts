import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersInterface} from '../interfaces/user/UsersInterface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  getUsers(): Observable<UsersInterface[]> {
  return  this.httpClient.get<UsersInterface[]>('https://jsonplaceholder.typicode.com/users');
  }

}
