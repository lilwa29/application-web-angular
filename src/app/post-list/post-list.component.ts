import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostModel} from '../models/post.model';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: PostModel[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: PostModel[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }
  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  }

}
