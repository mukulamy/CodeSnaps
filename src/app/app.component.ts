import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, SignupComponent, RouterLink, RouterLinkActive, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
constructor(){
  initializeApp(firebaseConfig);
}
}
