import {Component, Input, OnInit} from '@angular/core';
import {Posts} from '../../../models/posts';

@Component({
  selector: 'app-postpreviu',
  templateUrl: './postpreviu.component.html',
  styleUrls: ['./postpreviu.component.css']
})
export class PostpreviuComponent implements OnInit {
  @Input()
  post: Posts;
  constructor() { }

  ngOnInit(): void {
  }

}
