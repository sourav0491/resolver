import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { DemoResolverService } from './resolver/demo-resolver.service';


const routes: Routes = [
  {
    path:"posts",
    component:PostListComponent,
    resolve:{
      posts:DemoResolverService
    }
  },
  {
    path:"",
    redirectTo:"posts",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
