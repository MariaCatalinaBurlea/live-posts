import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  // ! - null or a value
  form!: FormGroup;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      imagePath: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const author = this.form.value.author;

    // Create post object
    const post: Post = new Post(
      title,
      description,
      imagePath,
      author,
      new Date()
    );

    // Calling service
    this.postService.addPost(post);

    // Navigate to /post-list
    this.router.navigate(["/post-list"]);
  }
}
