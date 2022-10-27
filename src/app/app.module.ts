import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
