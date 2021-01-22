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

const approutes : Routes= [
  {
    path : '' , 
    component : LoginComponent
  }, 
  {
   path : 'register' , 
   component : RegisterComponent
},
 
{
     path : 'dashboard',
     component : DashboardComponent
} 
    ]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
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
