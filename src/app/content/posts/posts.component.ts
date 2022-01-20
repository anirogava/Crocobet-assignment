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
  // fetchPosts gets posts from api call
  fetchPosts() {
    this.apiService.getPosts().subscribe((post) => (this.Posts = post));
  }
  // fetchPosts will be called as soon as posts component will be initialized
  ngOnInit() {
    this.fetchPosts();
  }
}
