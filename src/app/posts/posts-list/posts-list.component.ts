import { Component, OnInit, Input } from '@angular/core';

import { IPost } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  private _posts: IPost[] = [];
  @Input() get posts(): IPost[] {
    return this._posts;
  }
  set posts(value: IPost[]) {
    if (value) {
      this.filteredPosts = this._posts = value;
    }
  }
  filteredPosts: IPost[] = [];
  constructor(private dataService: DataService) { }

  remove(id: number) {
    this.dataService.deletePost(id).subscribe();
    var index = 0;
    this.posts.forEach(function (value, key) { if (value.id == id) index = key })
    this.posts.splice(index, 1);
  }

  ngOnInit() {

  }

  filter(data: string) {
    if (data) {
      this.filteredPosts = this.posts.filter((post: IPost) => {
        return post.title.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          post.body.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredPosts = this.posts;
    }
  }

  addPost(data: IPost) {
    this.posts.unshift(data);
  }
}
