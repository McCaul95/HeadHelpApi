import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import {AuthenticationService} from '../_services/auth.service';
import { ɵparseCookieValue } from '@angular/common';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {User} from '../_models/User'
import { JwtResponse } from '../_models/JwtResponse';
import { Subscriber, Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService) { 
      this.loginForm = this.formBuilder.group({
        username: new FormControl(),
        password: new FormControl()
      });
    }

    

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async onSubmit(loginForm){
    if (this.loginForm !== null){
      console.log(this.loginForm)
        var response = await this.authService.login(this.loginForm.value).toPromise();
        if(localStorage.getItem("access_token")!== null){
          console.log("loginSuccess");
          this.router.navigate(['/home']);
        }
    }
    else{
      return console.log("Login Failed");
    }
    
  }


  navRegister(){
    this.router.navigate(["/register"]);
  }

}
