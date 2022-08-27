import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

export interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public email: string = 'Yanovich2000@ukr.net';
  // public password: string = 'Botanik12345';

  loginForm: FormGroup;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3,)
      ])
    })
  }

  public FormBuilder() {
    this.router.navigate(['/main'])
  }
}
