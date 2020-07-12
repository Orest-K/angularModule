import { Component} from '@angular/core';
import {Posts} from '../../../models/posts';
import {PostsService} from '../../../services/posts.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  singlePost: Posts;
  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
    this.postsService.getSinglePost(activatedRoute.snapshot.params.id)
      .subscribe(singlep => this.singlePost = singlep);
  }

}
