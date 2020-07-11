import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Users} from "../interfaces/Users";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }
}
