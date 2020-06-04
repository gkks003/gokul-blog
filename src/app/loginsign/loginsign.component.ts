import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-loginsign',
  templateUrl: './loginsign.component.html',
  styleUrls: ['./loginsign.component.css']
})
export class LoginsignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  username: String = 'hmm003@gmail.com';
  password: String = '12345678';


  login(loginForm: NgForm) {
    var email=loginForm.controls.email.value;
  
    var _password=loginForm.controls.password.value;

  if(this.username === email && this.password === _password){
    this.router.navigate(['/blog']);
  }else{
    this.router.navigate(['/landing1']);
  }   
 }
}
