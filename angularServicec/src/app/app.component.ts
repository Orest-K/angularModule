import { Component } from '@angular/core';
import {Users} from "./components/interfaces/Users";
import {UsersService} from "./components/services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Users[];
  constructor(private usersService: UsersService) {
    this.usersService.getAllUsers().subscribe(value => this.users = value);
  }
}
