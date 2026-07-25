import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hidePassword = true;

  user: User = {
    username: '',
    password: ''
  };

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {}

  login() {
    this.authservice.login(this.user).subscribe({
      next: (response: any) => {
        localStorage.setItem("userId", response.id);
        console.log(response.id);
        localStorage.setItem("username", response.username);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert("Invalid username or password");
      }
    });
  }
}