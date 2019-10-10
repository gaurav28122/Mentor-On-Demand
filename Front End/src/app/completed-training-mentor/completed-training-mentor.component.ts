import { Component, OnInit } from '@angular/core';
import { CompletedTrainingMentorService } from './completed-training-mentor.service';
import { Training } from '../models/training.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-training-mentor',
  templateUrl: './completed-training-mentor.component.html',
  styleUrls: ['./completed-training-mentor.component.css'],
  providers: [CompletedTrainingMentorService]
})
export class CompletedTrainingMentorComponent implements OnInit {
  training: Training[];
  constructor(private router:Router, private completedtrainingmentorservice:CompletedTrainingMentorService) { }

  ngOnInit() {
    this.completedtrainingmentorservice.getTrainings().subscribe(data=>{
      this.training = data.filter(u=>u.status=='completed')
      console.log(this.training);
    })
  }

}
