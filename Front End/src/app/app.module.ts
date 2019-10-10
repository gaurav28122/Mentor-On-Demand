import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';

import { SignUpComponent } from './signup/signup.component';
import {SignUpService} from './signup/signup.service';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import { HomeComponent } from './home/home.component';
import {HomeService} from './home/home.service';
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


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    UserPageComponent,
    MentorpageComponent,
    ProgressComponent,
    CompletedTrainingComponent,
    CompletedTrainingMentorComponent,
    TrainerProgressComponent,
    TrainerProfileComponent,
    SearchResultComponent,
    EditSkillsComponent,
    AdminBlockComponent,
    MentorPaymentComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,SignUpService,LoginService,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
