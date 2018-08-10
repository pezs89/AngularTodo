import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  private isLoggedIn: Subscription;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
    this.isLoggedIn = this.authService.isAuthenticated().subscribe(sessionId => {
      if (sessionId) {
        this.authService.navigateTo('todos');
      }
    })
  }

  ngOnDestroy() {
    this.isLoggedIn.unsubscribe();
  }

  login() {
    this.authService.login({ email: this.loginForm.get('email').value, password: this.loginForm.get('password').value })
    this.loginForm.reset();
  }
}