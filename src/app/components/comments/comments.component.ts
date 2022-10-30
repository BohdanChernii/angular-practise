import {Component, OnInit} from '@angular/core';
import {IComments} from "../../interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComments[]
  selectedComment: IComments

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(value => this.comments = value)
  }

  getComment(comment: IComments) {
    this.selectedComment = comment
  }
}
