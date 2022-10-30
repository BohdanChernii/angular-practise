import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {IComments} from "../../interface";

@Component({
  selector: 'app-coments-details',
  templateUrl: './coments-details.component.html',
  styleUrls: ['./coments-details.component.css']
})
export class ComentsDetailsComponent implements OnInit {
  comment: IComments

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment']
      if (!this.comment) {
        this.commentService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
