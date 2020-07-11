import {Component, OnInit} from '@angular/core';
import {Users} from '../../../interfacesFetch/users/users';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  alluser: Users[];
  constructor(private usersService: UsersService) {
    usersService.getAllUsers().subscribe(allUsers => this.alluser = allUsers);
  }
  ngOnInit(): void {
  }

}
