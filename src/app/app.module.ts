import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import {RouterModule, Routes} from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
