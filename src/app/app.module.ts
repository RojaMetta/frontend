import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsService } from './services/news.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
//import { BusinessComponent } from './categories/';
import { HealthComponent } from './categories/health/health.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { ScienceComponent } from './categories/science/science.component';
import { SportsComponent } from './categories/sports/sports.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { FooterComponent } from './footer/footer.component';
import { BusinessComponent } from './categories/business/business.component';
import { GeneralComponent } from './categories/general/general.component';


const approutes : Routes= [
  {
    path : '' , 
    component : HomeComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
},
{
  path : 'business' , 
  component : BusinessComponent
},
{
  path : 'entertainment' , 
  component : EntertainmentComponent
},
{
  path : 'general',
  component : GeneralComponent
},
{
  path : 'health' , 
  component : HealthComponent
},
{
  path : 'science' , 
  component : ScienceComponent
},
{
  path : 'sports' , 
  component : SportsComponent
},
{
  path : 'technology' , 
  component : TechnologyComponent
},

  {
    path : 'login' , 
    component : LoginComponent
  }, 
  {
   path : 'register' , 
   component : RegisterComponent
} 
    ]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    //BusinessComponent,
    HealthComponent,
    EntertainmentComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    FooterComponent,
    BusinessComponent,
    GeneralComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
