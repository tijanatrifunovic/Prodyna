import { Component, OnInit } from '@angular/core';
import { IPost } from '../shared/interfaces';

import { DataService } from '../core/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string;
  posts: IPost[];
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.title = 'Posts';
    this.dataService.getPosts()
      .subscribe((posts: IPost[]) => this.posts = posts);
  }
  
}
