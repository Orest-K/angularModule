import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coments} from "../interfaces/Coments";

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  constructor(private httpClient: HttpClient) { }
  getAllComments(): Observable<Coments[]>{
    return this.httpClient.get<Coments[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
