import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authService = inject(AuthService)
  if (authService.isAuthenticated()) {
    return true;
  }else{
  router.navigate(['/'])
  return false;
  }
};
