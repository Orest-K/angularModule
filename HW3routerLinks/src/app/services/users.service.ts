import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../interfacesFetch/users/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }
  getAllUsers(): Observable<Users[]>{
    return this.httpClient.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
  getSingleUser(id: number): Observable<Users[]>{
    return  this.httpClient.get<Users[]>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
