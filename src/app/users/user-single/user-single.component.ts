import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  //public user!: User[];
  public user: any=[];
  public data: any;

  constructor(private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];

      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
      /*
      this.userService.getUser(username).subscribe((data:any) => {
        this.user == data.data;
        console.log(data);
      })
      */
    })
  }
    
}