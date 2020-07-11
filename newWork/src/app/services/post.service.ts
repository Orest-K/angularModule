import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostsInterface} from '../interfaces/PostsInterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }
  getAllPost1User(id): Observable<PostsInterface[]> {
    return this.httpClient.get<PostsInterface[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
