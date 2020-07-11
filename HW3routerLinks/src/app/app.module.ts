import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AllUsersComponent } from './components/user/all-users/all-users.component';
import { AllpostsComponent } from './components/posts/allPosts/allposts.component';
import { AllAlbumsComponent } from './components/albums/all-albums/all-albums.component';
import { SinglUserPageComponent } from './components/user/singl-user-page/singl-user-page.component';
import { UserPreviuComponent } from './components/user/user-previu/user-previu.component';
import { PostpreviuComponent } from './components/posts/postpreviu/postpreviu.component';
import { SinglePostComponent } from './components/posts/single-post/single-post.component';
import { AlboumPreviuComponent } from './components/albums/alboum-previu/alboum-previu.component';

const links: Routes = [
  {path: 'AllUsers', component: AllUsersComponent},
  {path: 'AllAlboums', component: AllAlbumsComponent},
  {path: 'AllPosts', component: AllpostsComponent},
  {path: 'user/:id', component: SinglUserPageComponent},
  {path: 'post/:id', component: SinglePostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllpostsComponent,
    AllAlbumsComponent,
    SinglUserPageComponent,
    UserPreviuComponent,
    PostpreviuComponent,
    SinglePostComponent,
    AlboumPreviuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(links)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
