import {Component, Input, OnInit} from '@angular/core';
import {Posts} from '../../../models/posts';

@Component({
  selector: 'app-all-post-user',
  templateUrl: './all-post-user.component.html',
  styleUrls: ['./all-post-user.component.css']
})
export class AllPostUserComponent implements OnInit {
  @Input()
  userpost: Posts;
  constructor() { }

  ngOnInit(): void {
  }

}
