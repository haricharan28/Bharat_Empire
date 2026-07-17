import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authservice:AuthService, private router:Router){}

  user:User={
    username:'',
    password:''
  };

  login(){
    this.authservice.login(this.user).subscribe({
      next:(response:any)=>{
        localStorage.setItem("userId", response.username);
        alert("Login Succesful");
        this.router.navigate(['/home']);
      },
      error: ()=>{
        alert("Invalid username or password");
      }
    });
  }

}
