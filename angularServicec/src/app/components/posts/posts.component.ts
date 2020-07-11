import {Component, Input, OnInit} from '@angular/core';
import {Posts} from "../interfaces/Posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts:Posts;

  constructor() { }

  ngOnInit(): void {
  }

}
