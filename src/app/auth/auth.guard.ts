import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // Verify if the token is present
    if (token) {
      return true; // Allow access if token is present
    }

    this.router.navigate(['/login']); // Redirect to login if token is not present  
    return false;
  }
}
