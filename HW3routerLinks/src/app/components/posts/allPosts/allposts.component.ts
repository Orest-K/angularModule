import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Posts} from '../../../interfacesFetch/posts';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
  allPosts: Posts[];
  constructor(private postServise: PostsService) {
    postServise.getAllPosts().subscribe(allposts => this.allPosts = allposts );
  }
  ngOnInit(): void {
  }

}
