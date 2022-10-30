import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input()
  post: IPost

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private postService:PostService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post']
      if(!this.post){
        this.postService.getById(id).subscribe(value => this.post = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
