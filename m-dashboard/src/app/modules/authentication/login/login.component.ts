import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormSubmitted: Boolean;
  authenticationErrors = {
    required: "Field is required",
    email: 'Enter a valid email'
  };
  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initLoginForm();
  }
  /**
 * Login form initialization
 */
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required]
    });
  }

  login() {
    this.loginFormSubmitted = true;
    //validate form
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.getJSON().subscribe(data => {
      console.log(data)
      this.router.navigate['/admin'];
    })
  }

}
