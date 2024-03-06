import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-news',
  templateUrl: './blog-news.component.html',
  styleUrls: ['./blog-news.component.scss']
})
export class BlogNewsComponent implements OnInit {

  blogPosts: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Titolo articolo 1', description: 'Descrizione articolo 1' },
    { id: 2, title: 'Titolo articolo 2', description: 'Descrizione articolo 2' },
    // Aggiungi altri articoli del blog
  ];

  newsItems: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Titolo notizia 1', description: 'Descrizione notizia 1' },
    { id: 2, title: 'Titolo notizia 2', description: 'Descrizione notizia 2' },
    // Aggiungi altre notizie
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
