import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hidePassword = true;
  hideConfirmPassword = true;

  confirmPassword = '';

  user: User = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    if (this.user.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    this.authService.register(this.user).subscribe({

      next: () => {

        alert("Registration Successful");

        this.router.navigate(['/login']);

      },

      error: () => {

        alert("Registration Failed");

      }

    });

  }

}