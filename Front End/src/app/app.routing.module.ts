import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import { SignUpComponent } from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UserPageComponent} from './userpage/userpage.component';
import { MentorpageComponent } from './mentorpage/mentorpage.component';
import { ProgressComponent } from './progress/progress.component';
import { CompletedTrainingComponent } from './completed-training/completed-training.component';
import { TrainerProgressComponent } from './trainer-progress/trainer-progress.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { AdminBlockComponent } from './admin-block/admin-block.component';
import { MentorPaymentComponent } from './mentor-payment/mentor-payment.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { CompletedTrainingMentorComponent } from './completed-training-mentor/completed-training-mentor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'userpage', component: UserPageComponent},
  {path: 'mentorpage', component: MentorpageComponent},
  {path:'progress', component: ProgressComponent},
  {path: 'completed-training', component: CompletedTrainingComponent},
  {path: 'trainer-progress', component: TrainerProgressComponent},
  {path: 'trainer-profile', component: TrainerProfileComponent},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'edit-skills', component: EditSkillsComponent},
  {path: 'admin-block', component:AdminBlockComponent},
  {path: 'mentor-payment', component: MentorPaymentComponent},
  {path: 'admin-edit', component: AdminEditComponent},
  {path: 'completed-training-mentor', component: CompletedTrainingMentorComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
