import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { CreateBinComponent } from './components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { ViewsnippetComponent } from './components/viewsnippet/viewsnippet.component';

export const routes: Routes = [
    { path: 'createbin', component: CreateBinComponent, canActivate:[authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'about', component: AboutComponent},
    { path: '', component: HomeComponent },
    { path: 'snippet/:id', component: ViewsnippetComponent },
    { path:'**', component: NotFoundComponent },

  ];