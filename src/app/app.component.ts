import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new Post( 'Mon premier post','Un contenu très intéressant'),
    new Post('Mon second post', 'Un contenu très intéressant encore'),
    new Post ('Mon troisième post', 'Un contenu très intéressant pour un trpisièem post'),
    ]
}
