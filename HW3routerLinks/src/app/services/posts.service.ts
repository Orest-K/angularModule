import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../interfacesFetch/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }
  getAllPosts(): Observable<Posts[]>{
    return this.httpClient.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getSinglePost(id: number): Observable<Posts[]>{
    return this.httpClient.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getAllPostUser(id: number): Observable<Posts[]>{
    return this.httpClient.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
