import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Posts';
  posts$: Observable<Post[]> | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }

  postId = (_index: number, p: Post) =>  p.id; 
}
