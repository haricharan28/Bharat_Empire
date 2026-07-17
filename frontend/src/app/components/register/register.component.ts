import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user:User={
    username:'',
    password:''
  };
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  
  register(){
    this.authService.register(this.user).subscribe({
      next: ()=>{
        alert("Registration Succesful");
        this.router.navigate(['/login']);
      },
      error:()=>{
        alert("Registration failed");
      }
    });
  }

}
