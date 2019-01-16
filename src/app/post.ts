
export class Post {
  title: string;
  loveIts: number;
  content: string;
  created_at: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.created_at = new Date();
    this.loveIts = 0;
  }
}
