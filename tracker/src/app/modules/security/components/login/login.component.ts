import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";
//import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {GoogleAuthProvider} from 'firebase/auth';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router,private aFA:AngularFireAuth) {
  }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });

 login(){
   let email=this.loginForm.get('email')?.value;
   let pwd=this.loginForm.get('password')?.value;

   this.aFA.signInWithEmailAndPassword(email!,pwd!)
     .then(response=>{
       console.log(response);
       alert("User Login Successful!");
       this.router.navigateByUrl('/dashboard');
     });

 }

 loginWithGoogle(){
   this.aFA.signInWithPopup(new GoogleAuthProvider())
     .then(response=>{
       console.log(response);
     }).catch(error=>{
     console.log(error);
   })
 }

}