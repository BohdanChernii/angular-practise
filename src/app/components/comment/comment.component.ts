import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComments} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: IComments

  @Output()
  liftComment = new EventEmitter<IComments>()

  constructor(private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
  }

  lift() {
    this.liftComment.emit(this.comment)
  }
  getDetails(){
  this.router.navigate([this.comment.id],{relativeTo:this.activatedRoute,state:{comment:this.comment}})
  }
}
