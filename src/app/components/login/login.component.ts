import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, Form, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService:AuthService){};

  
  email = new FormControl("", [Validators.required, Validators.email] );
  password = new FormControl("", [Validators.required, Validators.minLength(6)]);
  form = new FormGroup({
    email: this.email,
    password: this.password
  });

  login() {
   
    console.log(this.form.value);
    this.authService.loginUser(this.form.value.email!, this.form.value.password!);
   
  }
  
  reset(){
    this.form.reset();
  }
}



