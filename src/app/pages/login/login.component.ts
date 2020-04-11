import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted: Boolean = false;

  constructor(
    private authServ: AuthService,
    private formBuilder: FormBuilder,
    private loadingServ: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  ngOnDestroy() {
  }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loadingServ.startLoading();

    this.authServ.authenticate(this.loginForm.value.email, this.loginForm.value.password).then(res => {
      this.loadingServ.stopLoading();
      this.router.navigateByUrl('/dashboard');
    }).catch(err => {
      this.loadingServ.stopLoading();
      console.log(err);
    });
  }

}
