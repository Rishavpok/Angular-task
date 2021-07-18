import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService ,AuthResponseData } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true
  isLoading = false
  error : string = ''

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLogin = !this.isLogin;
  }
  onSubmit(form : NgForm){

    const email = form.value.email;
    const password = form.value.password;

      let authObs : Observable<AuthResponseData>

     this.isLoading= true
    if(this.isLogin){
      authObs = this.auth.login(email, password);
    } 
    else{
      authObs = this.auth.signup(email,password);
    }

    authObs.subscribe(resData => {
      console.log(resData)
      this.isLoading = false
    },
    errorMessage => {
       
      console.log(errorMessage)
       this.error = errorMessage;
      this.isLoading = false
    })

   
    form.reset();
  }

}
