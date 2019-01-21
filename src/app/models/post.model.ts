// Objet Post permettant l'instanciation d'un post.

export class PostModel {
  loveIts: number;
  created_at: Date;

  constructor(public title: string,
              public content: string) {
    this.created_at = new Date();
    this.loveIts = 0;
  }
}
