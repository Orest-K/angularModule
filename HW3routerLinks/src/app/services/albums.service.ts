import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Allbums} from '../interfacesFetch/allbums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }
  getAllAlbums(): Observable<Allbums[]>{
    return this.httpClient.get<Allbums[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
