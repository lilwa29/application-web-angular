import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: PostModel;
  @Input() index: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onUpdateLoveIts(n: number) {
    this.postsService.updateLoveIt(n, this.index);
  }
  onDelete(){
    this.postsService.deletePost(this.index);
  }
}
