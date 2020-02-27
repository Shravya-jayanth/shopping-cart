import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  emailSubmitted = false
  forgotPassword = false
  changePassword = false
  changePasswordSubmitted = false
  emailForChangingPW = false
  forgotPasswordForm: FormGroup
  confirmNewPassword: FormGroup


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
    this.confirmNewPassword = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]

    });
  }
  get f() { return this.registerForm.controls; }
  get pw() { return this.forgotPasswordForm.controls; }
  get cpw() { return this.confirmNewPassword.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    //alert('SUCCESS!! :-)')
    this.router.navigateByUrl('/poroduct-listing');
  }
  onForgotPassword() {
    this.forgotPassword = true;
    return
  }
  sendEmail() {
    this.emailForChangingPW = true
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    else {
      this.changePassword = false
      this.emailSubmitted = true;
    }
  }

  changePW() {
    this.changePasswordSubmitted = true
    if (this.confirmNewPassword.invalid) {
      return;
    }
    console.log(this.confirmNewPassword.value.password);
    if (this.confirmNewPassword.value.password === this.confirmNewPassword.value.confirmPassword) {
      alert('Successfully changed the password')
      this.router.navigateByUrl('/poroduct-listing');
    }
    else {
      alert("Password doesn't match")
    }
  }
}
