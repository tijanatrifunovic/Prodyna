import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './posts/posts.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule, 
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
