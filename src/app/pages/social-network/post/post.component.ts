import {Component, OnInit} from '@angular/core';
import {PostHttpService} from "../../../services/post-http.service";
import {PostModel} from "../../../models/post.model";
import {CommentModel} from "../../../models/comment.model";
import {UserModel} from "../../../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  posts: PostModel[] = [];
  comments: CommentModel[] = [];
  selectedTag: string = '';
  loadingPosts: boolean = true;
  loadingComments: boolean = true;
  userForm: FormGroup;

  constructor(private postHttpService: PostHttpService, private formBuilder: FormBuilder) {
    this.userForm = this.newUserForm();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.posts = [];
    this.selectedTag = '';
    this.loadingPosts = true;
    this.postHttpService.getPosts().subscribe(response => {
      this.loadingPosts = false;
      this.posts = response.data;
    });
  }

  loadComments(postId: string) {
    this.comments = [];
    this.loadingComments = true;
    this.postHttpService.getComments(postId).subscribe(response => {
      this.loadingComments = false;
      this.comments = response.data;
    });
  }

  loadUserProfile(userId: string) {
    this.postHttpService.getUser(userId).subscribe(response => {
      this.userForm.patchValue(response.data)
    });
  }

  filterByTag(tag: string) {
    this.posts = [];
    this.selectedTag = tag;
    this.loadingPosts = true;
    this.postHttpService.getPostsByTag(tag).subscribe(response => {
      this.loadingPosts = false;
      this.posts = response.data;
    });
  }

  newUserForm() {
    return this.formBuilder.group({
      id: [{value: null, disabled: true}],
      title: [{value: null, disabled: true}, [Validators.required]],
      firstName: [{value: null, disabled: true}, [Validators.required]],
      lastName: [{value: null, disabled: true}, [Validators.required]],
      picture: [{value: null, disabled: true}, [Validators.required]],
      gender: [{value: null, disabled: true}, [Validators.required]],
      email: [{value: null, disabled: true}, [Validators.required]],
      dateOfBirth: [{value: null, disabled: true}, [Validators.required]],
      phone: [{value: null, disabled: true}, [Validators.required]],
      registerDate: [{value: null, disabled: true}, [Validators.required]],
      updatedDate: [{value: null, disabled: true}, [Validators.required]],
      location: [{value: null, disabled: true}, [Validators.required]],
    })
  }
}
