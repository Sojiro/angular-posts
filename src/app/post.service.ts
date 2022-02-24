import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private httpClient: HttpClient) {}

  readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.httpClient.get<Post[]>(this.API_URL);
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
