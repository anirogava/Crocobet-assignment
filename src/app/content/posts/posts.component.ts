import { Component, OnInit } from '@angular/core';
import { Posts, UserResult } from '../models/posts.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  Posts: Posts[] | undefined;

  constructor(private apiService: ApiService) {}

  fetchPosts() {
    this.apiService.getPosts().subscribe((post) => (this.Posts = post));
  }
  ngOnInit() {
    this.fetchPosts();
  }
}
