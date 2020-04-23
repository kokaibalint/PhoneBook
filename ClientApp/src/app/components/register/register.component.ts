import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private service: UserService) {}

  ngOnInit(): void {
  }

  registerUser(username: string, email: string, password: string) {
    console.log(username, email, password);
    const user = User{username: username, email: email, password: password};
    console.log(user);
    this.service.registerUser({username, email, password} as User)
    .subscribe();
  }
}
