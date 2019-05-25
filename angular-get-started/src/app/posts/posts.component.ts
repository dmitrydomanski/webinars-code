import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../services/client-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // posts$: Observable<any>
  posts: any[];

  constructor(
    public client: ClientServiceService
  ) { }

  ngOnInit() {
    this.client.fetchPosts().subscribe((posts: any) => {
      this.posts = posts.filter((post: any) => post.id%2 === 0);
    });
    // console.log(this.client.fetchPosts());
    // this.posts$ = this.client.fetchPosts();
  }

}
