import {Component, Input, OnInit} from '@angular/core';
import {Coments} from "../interfaces/Coments";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
@Input()
coments: Coments;

constructor() { }

  ngOnInit(): void {
  }

}
