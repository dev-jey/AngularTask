import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

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
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });
  }
  /**
   * 
   * Execute login functionality
   */
  login(e) {
    e.preventDefault();
    this.loginFormSubmitted = true;
    //validate form
    if (this.loginForm.invalid) {
      return;
    }
    //Local Storage Usage
    localStorage.setItem('user', JSON.stringify(this.loginForm.value));
    this.router.navigateByUrl('/dashboard');
  }

}
