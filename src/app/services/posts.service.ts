import {PostModel} from '../models/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class PostsService {
  private posts: PostModel[] = [];
  postsSubject = new Subject<PostModel[]>();

  constructor(private httpClient: HttpClient) {
    this.getPostsFromServer();
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  updateLoveIt(addNumber: number, index: number) {
    this.posts[index].loveIts += addNumber;
    this.savePostsToServer();
    this.emitPostsSubject();
  }

  savePostsToServer() {
    this.httpClient.put('https://http-client-demo-dc845.firebaseio.com/posts.json', this.posts).subscribe(
      () => {
        console.log('Enregistrement terminé');
      },
      (error) => {
        console.log('Erreur pendant la sauvegarde ! ' + error);
      });
  }

  getPostsFromServer() {
    this.httpClient.get<PostModel[]>('https://http-client-demo-dc845.firebaseio.com/posts.json').subscribe(
      (response) => {
        this.posts = response;
        this.emitPostsSubject();
      },
      (error) => {
        console.log('Erreur ' + error);
      }
    );
  }
}
