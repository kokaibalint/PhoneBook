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

  user: User;

  constructor(private service: UserService) {}

  ngOnInit(): void {
  }

  registerUser(username: string, email: string, password: string) {
    console.log(username, email, password);

    const user = new User(username, email, password);
    console.log(new User(username, email, password));
    this.service.registerUser(user).subscribe();
  }
}
