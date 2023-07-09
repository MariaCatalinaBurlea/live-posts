import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

/**
 *  Database Path:
    https://live-posts-ca5a2-default-rtdb.firebaseio.com/
 */

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  // Save
  saveData() {
    // Step 1 - get list of post from post.service
    const listOfPosts: Post[] = this.postService.getPosts();

    // Step 2 - send list of posts to backend
    this.http
      .put(
        'https://live-posts-ca5a2-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  // Fetch
  fetchData() {
    // Step 1 - get the data from the database
    this.http
      .get<Post[]>(
        'https://live-posts-ca5a2-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          // Step 2 - Send to post.service
          this.postService.setPosts(listOfPosts);
        
        })
      )
      .subscribe();
  }
}
function listOfPosts(value: Post[]): void {
  throw new Error('Function not implemented.');
}
