import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  // ! - null or a value
  form!: FormGroup;
  index: number = 0;
  editMode = false;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    let author = '';
    // anonymous function
    this.route.params.subscribe((params: Params) => {
      if(params['index']){
        console.log(params['index']);
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;
        author = post.author;
        this.editMode = true;
      }
    });
    this.form = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl(description, [
        Validators.required,
        Validators.minLength(10),
      ]),
      imagePath: new FormControl(imagePath, [Validators.required]),
      author: new FormControl(author, [Validators.required]),
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
      new Date(),
      0
    );

    // Calling service
    if(this.editMode){
      this.postService.updatePost(this.index, post);
    } else {
      this.postService.addPost(post);
    }

    // Navigate to /post-list
    this.router.navigate(["/post-list"]);
  }
}
