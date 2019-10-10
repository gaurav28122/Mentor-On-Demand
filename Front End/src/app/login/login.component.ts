import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor} from '../models/mentor.model';
import { User } from '../models/user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []

})
export class LoginComponent implements OnInit {
  mentor: Mentor[];
  users: User[];
  userobj: User = new User();
  mentorobj: Mentor = new Mentor();
  role:string;
  userName:string;
  password:string;

  constructor(private router: Router, private loginService: LoginService) {

  }
  ngOnInit(){

    if(sessionStorage.length!=0){
      sessionStorage.clear();
    }

  };
  check(): void{
    if(this.role==null|| this.userName==null || this.password==null){
      if(this.userName=="admin" || this.password=="admin"){
        this.router.navigateByUrl("/admin-block")
      }
      else{
      alert("Please fill all fields");
      }
    }
    else{
      if(this.role.match('User')){
        this.loginService.getUsers(this.userName, this.password).subscribe(data=>{
          console.log(data);
          this.userobj = data;
          if(data==null)
          alert("No User Found");
          else{
            if(this.userobj.active==false){
              alert("You are blocked by the admin");
              window.location.reload();
            }
            else{
              alert("User login successful");
            sessionStorage.setItem('storeuser',JSON.stringify(data))
            this.router.navigateByUrl("/userpage")
            }
            
          }
        })
      }
      else if(this.role.match('Mentor')){
        this.loginService.getMentors(this.userName, this.password).subscribe(data=>{
          this.mentorobj = data;
          console.log(data);
          if(data==null)
          alert("Invalid");
          else{
            if(this.mentorobj.active==false){
              alert("You are blocked by the admin");
              window.location.reload();
            }
            else{
            alert("Mentor login successful");
            let toStore = JSON.stringify(data);
            sessionStorage.setItem("name",toStore);
            sessionStorage.setItem('storeuser',JSON.stringify(data))
            this.router.navigateByUrl("/mentorpage")
            }
          }
        })
      }
      else{
        this.loginService.getUsers(this.userName, this.password).subscribe(data=>{
          if(data==null)
          alert("Invalid");
          else{
            sessionStorage.setItem('storeuser',JSON.stringify(data))
            this.router.navigateByUrl("/admin-edit")
          }
        })
      }

    }
  }



}


