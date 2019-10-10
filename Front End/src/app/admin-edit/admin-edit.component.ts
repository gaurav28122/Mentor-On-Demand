import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology.model';
import { Router } from '@angular/router';
import { AdminEditService } from './admin-edit.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
  providers:[AdminEditService]
})
export class AdminEditComponent implements OnInit {
 
  technology:Technology= new Technology();
  constructor(private router:Router, private admineditservice: AdminEditService) { }
create(){
  if(this.technology.price==null || this.technology.techName==null){
    alert("Please fill all the fields!!");
  }
  else{
    console.log(this.technology);
    
    this.admineditservice.createTechnology(this.technology).subscribe(data => {
      console.log(data);
      
    })
  }
}
ngOnInit() {
    
}
}
