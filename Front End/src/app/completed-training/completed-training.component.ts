import { Component, OnInit } from '@angular/core';
import { CompletedTrainingService } from './completed-training.service';
import { Router } from '@angular/router';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-completed-training',
  templateUrl: './completed-training.component.html',
  styleUrls: ['./completed-training.component.css'],
  providers: [CompletedTrainingService]
})
export class CompletedTrainingComponent implements OnInit {
training: Training[];
  constructor(private router:Router, private completedtrainingservice:CompletedTrainingService) { }

  ngOnInit() {
    this.completedtrainingservice.getTrainings().subscribe(data=>{
      this.training = data.filter(u=>u.status=='completed')
      console.log(this.training);
    })
    
    
  }

}
