import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {UsersComponent} from "./components/users/users.component";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {CommentComponent} from './components/comment/comment.component';
import {UserComponent} from './components/user/user.component';
import {ComentsDetailsComponent} from './components/coments-details/coments-details.component';


const routes: Routes = [

  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {
        path: 'users', component: UsersComponent
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments', component: CommentsComponent, children: [
          {path: ':id', component: ComentsDetailsComponent}
        ]
      }
    ]
  }

]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,

    MainLayoutComponent,
    HeaderComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    PostDetailsComponent,
    CommentComponent,
    UserComponent,
    ComentsDetailsComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
}

// @ts-ignore
