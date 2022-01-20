import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserResult } from '../models/posts.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  // empty rray of users information
  UsersList: UserResult[] = [];

  subscription!: Subscription;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  // fetching users information from api call and saving in Userslist
  fetchUsers() {
    this.subscription = this.apiService.getUser().subscribe((users) => {
      this.UsersList = users;
    });
  }
  // fetchUsers will be called as soon as list component will be initialized
  ngOnInit() {
    this.fetchUsers();
  }

  //when list component will be destroyed subscription ends
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
