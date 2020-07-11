import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ComentsInterface} from '../interfaces/ComentsInterface';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {

  constructor(private httpClient: HttpClient) {
  }
  getAllCommentsUser(postId): Observable<ComentsInterface[]>{
    return this.httpClient.get<ComentsInterface[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
