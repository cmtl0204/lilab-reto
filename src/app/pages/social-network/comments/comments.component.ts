import {Component, Input, OnInit} from '@angular/core';
import {PostHttpService} from "../../../services/post-http.service";
import {CommentModel} from "../../../models/comment.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  @Input() comments: CommentModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
