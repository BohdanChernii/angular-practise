import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interface";
import {IPost} from "../../interface/post.interface";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost

  @Output()
  liftPost = new EventEmitter<IPost>()

  constructor(
    private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  lift() {
    this.liftPost.emit(this.post)
  }

  getDetails(): void {
    this.router.navigate([this.post.id],
      {relativeTo: this.activatedRoute, state: {post: this.post}})
  }
}
