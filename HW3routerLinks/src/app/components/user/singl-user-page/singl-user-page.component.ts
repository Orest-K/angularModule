import {Component} from '@angular/core';
import {Users} from '../../../models/users/users';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../../services/posts.service';
import {Posts} from '../../../models/posts';

@Component({
  selector: 'app-singl-user-page',
  templateUrl: './singl-user-page.component.html',
  styleUrls: ['./singl-user-page.component.css']
})
export class SinglUserPageComponent {
singleUser: Users[];
userposts: Posts[];
  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute,
              private postsService: PostsService) {
    const id = activatedRoute.snapshot.params.id;
    this.usersService.getSingleUser(id)
      .subscribe(singleUseri => this.singleUser = singleUseri );
    this.postsService.getAllPostUser(id)
      .subscribe(alluserposts => this.userposts = alluserposts );
  }
}
