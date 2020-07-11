import {Component, OnInit} from '@angular/core';
import {Users} from '../../../interfacesFetch/users/users';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-singl-user-page',
  templateUrl: './singl-user-page.component.html',
  styleUrls: ['./singl-user-page.component.css']
})
export class SinglUserPageComponent implements OnInit {
singleUser: Users;
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) {
    this.usersService.getSingleUser(activatedRoute.snapshot.params.id)
      .subscribe(singleUseri => this.singleUser = singleUseri);
  }

  ngOnInit(): void {
  }

}
