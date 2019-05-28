import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser (event) {
    event.preventDefault();
    const { target } = event;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.auth.getUserDetails(username, password);
  }

}
