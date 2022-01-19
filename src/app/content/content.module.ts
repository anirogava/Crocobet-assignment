import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ContentComponent } from './content.component';
import { ApiService } from './service/api.service';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './list/Details/Details.component';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [
    ContentComponent,
    ListComponent,
    DetailsComponent,
    PostsComponent,
  ],
  exports: [ContentComponent],
  providers: [ApiService],
})
export class ContentModule {}
