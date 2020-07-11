import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../interfaces/Users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
