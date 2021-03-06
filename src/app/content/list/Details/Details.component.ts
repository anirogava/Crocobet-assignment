import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserResult } from '../../models/posts.model';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-Details',
  templateUrl: './Details.component.html',
  styleUrls: ['./Details.component.css'],
})
export class DetailsComponent implements OnInit {
  userDetails: UserResult | undefined;
  subscription!: Subscription;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // initUserDetails gets users details by id, route will be changed based on user id
  private initUserDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService
      .getOneUser(id)
      .subscribe((data) => (this.userDetails = data));
  }
  // goToList navigates router to list component
  goToList() {
    this.router.navigate(['list']);
  }
    // initUserDetails will be called as soon as details component will be initialized
  ngOnInit() {
    this.initUserDetails();
  }
}
