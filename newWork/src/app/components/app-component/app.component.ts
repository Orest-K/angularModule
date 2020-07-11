import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UsersInterface} from '../../interfaces/user/UsersInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users: UsersInterface[];
  constructor(private usersService: UserService) {
    usersService.getUsers().subscribe(value => this.users = value);
  }
}
