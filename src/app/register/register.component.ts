import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../model/userRegister';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user : UserRegister=new UserRegister();
successmsg : string;
constructor(private router : Router,private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit() : void{
    this.authenticationService.addUser(this.user).subscribe(data=>{
      if(data)
      {
        this.user=new UserRegister();
        this.successmsg="Record added with success!!!"
       }  
    },error=>{});
   }

}
