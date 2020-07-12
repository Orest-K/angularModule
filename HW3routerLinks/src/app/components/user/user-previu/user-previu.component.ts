import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../../models/users/users';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-previu',
  templateUrl: './user-previu.component.html',
  styleUrls: ['./user-previu.component.css']
})
export class UserPreviuComponent implements OnInit {
  @Input()
  user: Users;
  constructor() { }

  ngOnInit(): void {
  }
}
