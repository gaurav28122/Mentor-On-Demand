import { Component, OnInit } from '@angular/core';
import { CompletedTrainingService } from '../completed-training/completed-training.service';
import { Training } from '../models/training.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [CompletedTrainingService]
})
export class ProgressComponent implements OnInit {

  training: Training[];
  constructor(private router:Router, private completedtrainingservice:CompletedTrainingService) { }

  ngOnInit() {
    this.completedtrainingservice.getTrainings().subscribe(data=>{
      this.training = data.filter(u=>u.status=='current')
      console.log(this.training);
    })

  }

}
