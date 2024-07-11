import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService:AuthService ,private router: Router){};

  register(signupform: NgForm) {
    console.log(signupform.value);
    this.authService.registerUser(signupform.value.email, signupform.value.password);
    this.router.navigate(['/login']);
  }

  reset(signupform: NgForm) {
    signupform.reset();
  }
}
