import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './content/list/Details/Details.component';
import { ListComponent } from './content/list/list.component';
import { PostsComponent } from './content/posts/posts.component';

const routes: Routes = [
  {
    // on empty path list component will run
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  { path: 'list', component: ListComponent },
  { path: 'users/:id', component: DetailsComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
