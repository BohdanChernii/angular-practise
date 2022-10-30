import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state?.['user']
      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })
  }
ngOnInit() {
}

}
