import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { SignUpService } from './signup.service';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: ["node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"],
})
export class SignUpComponent  {

  users: User[];
  user: User =  new User();
  mentor: Mentor = new Mentor();
  role :string;
  constructor(private router: Router, private signupService: SignUpService) {

  }

  create(): void {
    if (this.user.contactNumber == null || this.user.firstName == null || this.user.lastName == null || this.user.linkedinUrl == null || this.user.password == null || this.user.userName == null || this.user.yearsOfExperience == null)
    alert("Please fill all fields");
    
    else{
    if(this.role.match('USER')){
    this.signupService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  }
  else{
    this.signupService.createMentor(this.user).subscribe(data=>{alert("Mentor created successfully");});
  }}
}


firstName(): void {
  var pattern = "^[A-Za-z -]+$";
  var x = this.user.firstName;
  if (x.match(pattern)) {
    document.getElementById("msg1").innerHTML = "";
  }
  else {
    document.getElementById("msg1").innerHTML = "Enter Valid First Name";
  }

}
lastName(): void {
  var pattern = "^[A-Za-z -]+$";
  var x = this.user.lastName;
  if (x.match(pattern)) {
    document.getElementById("msg2").innerHTML = "";
  }
  else {
    document.getElementById("msg2").innerHTML = "Enter Valid Last Name";
  }

}
contact(): void {
  var pattern = "^[0-9]{10}$";
  var x = this.user.contactNumber;
  if (x.match(pattern)) {
    document.getElementById('msg3').innerHTML = "";
  }
  else {
    document.getElementById('msg3').innerHTML = "Enter Valid Contact Number";
  }
}
validateEmail(): void {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = this.user.userName;
  if (re.test(String(email).toLowerCase())) {
    document.getElementById('msg4').innerHTML = "";
  }
  else {
    document.getElementById('msg4').innerHTML = "Invalid Email Address";
  }
}




}




