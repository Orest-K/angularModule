import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`app.component.css`]
})
export class AppComponent {
posts: any[];
constructor(private httpPost: HttpClient) {
this.httpPost
  .get<any[]>('https://jsonplaceholder.typicode.com/posts')
  .subscribe(response => this.posts = response);
}

}
