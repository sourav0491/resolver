import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DemoResolverService {

  constructor(private _postService:PostService) { }

  resolve(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
    return this._postService.getPostList();
  }
}
