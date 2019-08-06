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
  infinitePosts: IPost[] = [];
  sum = 20;
  scrollDistance = 1;
  direction = '';

  @Input() get posts(): IPost[] {
    return this._posts;
  }
  set posts(value: IPost[]) {
    if (value) {
      this.filteredPosts = this._posts = value;
      this.appendItems(0, this.sum);
    }
  }
  filteredPosts: IPost[] = [];
  constructor(private dataService: DataService) {

  }

  remove(id: number) {
    console.log("delete", id);
    this.dataService.deletePost(id).subscribe();
    var index = 0;
    this.posts.forEach(function (value, key) { if (value.id == id) index = key })
    this.posts.splice(index, 1);
    this.infinitePosts = [];
    this.appendItems(0, this.sum);
  }

  ngOnInit() {

  }

  filter(data: string) {
    if (data) {
      this.filteredPosts = this.posts.filter((post: IPost) => {
        return post.title.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          post.body.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
      this.infinitePosts = [];
      this.appendItems(0, this.sum);
    } else {
      this.filteredPosts = this.posts;
      this.infinitePosts = [];
      this.appendItems(0, this.sum);
    }
  }

  addPost(data: IPost) {
    this.posts.unshift(data);
    this.infinitePosts.unshift(data);
  }

  addItems(startIndex, endIndex) {
    console.log("add items", startIndex, endIndex);
    for (let i = startIndex; i <= endIndex; ++i) {
      if (i <= (this.filteredPosts.length - 1))
        this.infinitePosts.push(this.filteredPosts[i]);
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex);
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    this.direction = 'down'
  }
}
