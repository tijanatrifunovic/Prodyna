import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FilterTextboxComponent } from './posts-list/filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { PostFormComponent } from '../posts/post-form/post-form.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    FilterTextboxComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
