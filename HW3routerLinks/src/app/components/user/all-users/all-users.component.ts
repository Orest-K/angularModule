import {Component} from '@angular/core';
import {Users} from '../../../models/users/users';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent{
  alluser: Users[];
  constructor(private usersService: UsersService, private router: Router) {
    usersService.getAllUsers().subscribe(value => {
      this.alluser = value;
    });
  }
  toSingleUser(user: Users): void {
      this.router.navigate(['users', user.id]);
  }

}
