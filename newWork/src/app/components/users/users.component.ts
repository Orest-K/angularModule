import {Component, Input, OnInit} from '@angular/core';
import {UsersInterface} from '../../interfaces/user/UsersInterface';
import {PostService} from '../../services/post.service';
import {ComentsService} from '../../services/coments.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user: UsersInterface;
  constructor(private postService: PostService, private comentsService: ComentsService) {}

  ngOnInit(): void {}
  showPostUser(id: number) {
   this.postService.getAllPost1User(id).subscribe(postsOfUser => {
     console.log(postsOfUser);
     for (const post of postsOfUser){
       this.comentsService
         .getAllCommentsUser(post.id)
         .subscribe(comentsPost1User => console.log(comentsPost1User));
     }
   });
  }
}
