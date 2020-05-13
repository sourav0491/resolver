import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts:Post[];
  constructor(private _route:ActivatedRoute) { 
    this.posts=[];
  }

  ngOnInit() {
    this.posts=this._route.snapshot.data["posts"];
  }

}
