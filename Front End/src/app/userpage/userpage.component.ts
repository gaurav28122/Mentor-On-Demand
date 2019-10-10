import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(sessionStorage.length==0){
      alert("You must Login first");
      window.location.pathname='/login';
    }
    else{
      var getuser = JSON.parse(sessionStorage.getItem('storeuser'));
      console.log(getuser);
      
      document.getElementById('displayName').innerHTML="Hi, "+getuser.firstName;
    }
  }


  logout():void{
    sessionStorage.clear(); document.location.pathname='/login';
  }
}
