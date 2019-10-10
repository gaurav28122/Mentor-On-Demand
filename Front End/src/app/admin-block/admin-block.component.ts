import { Component, OnInit } from '@angular/core';
import { AdminBlockService } from './admin-block.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Mentor } from '../models/mentor.model';

@Component({
  selector: 'app-admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: ['./admin-block.component.css']
})
export class AdminBlockComponent implements OnInit {
users: User[];
mentors: Mentor[];
user:User=new User();
mentor:Mentor = new Mentor();
role:string; 
active:boolean=false;
constructor(private router: Router, private adminblockservice: AdminBlockService)  { }

  ngOnInit() {
    this.adminblockservice.getUsers().subscribe(data=>{
      this.users=data;

    })

    this.adminblockservice.getMentors().subscribe(data=>{
      this.mentors=data;
      
    })
  }

usermentor() {
    if(this.role == "mentor")
        document.getElementById('mentortable').style.display = 'block';
    else
        document.getElementById('mentortable').style.display = 'none';

    if(this.role == "user")
        document.getElementById('usertable').style.display = 'block';
    else
        document.getElementById('usertable').style.display = 'none';
}


block(id):void{
  this.active=false;
  this.adminblockservice.getUser(id).subscribe(data=>{
    this.user=data;
    this.user.active=this.active;
    this.adminblockservice.updateUser(this.user).subscribe(data=>{
      alert('User Blocked!');
      window.location.reload();      
    })
  })
}
unblock(id):void{
  this.active=true;
  this.adminblockservice.getUser(id).subscribe(data=>{
    this.user=data;
    this.user.active=this.active;
    this.adminblockservice.updateUser(this.user).subscribe(data=>{
      alert('User Unblocked');
      window.location.reload();
    })
  })
}

block1(id):void{
  this.active=false;
  this.adminblockservice.getMentor(id).subscribe(data=>{
    this.mentor=data;
    this.mentor.active=this.active;
    this.adminblockservice.updateMentor(this.mentor).subscribe(data=>{
      alert('Mentor Blocked!');
      window.location.reload();      
    })
  })
}
unblock1(id):void{
  this.active=true;
  this.adminblockservice.getMentor(id).subscribe(data=>{
    this.mentor=data;
    this.mentor.active=this.active;
    this.adminblockservice.updateMentor(this.mentor).subscribe(data=>{
      alert('Mentor Unblocked');
      window.location.reload();
    })
  })
}

}
