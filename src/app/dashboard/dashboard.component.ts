
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
newList : Array<any>;
 

 
  constructor(private newsService : NewsService)
  {}
  ngOnInit()
  {
     this.newsService.readNews().subscribe(response=>{
       if(response)
       {
         this.newList=response['articles'];
         console.log(this.newList[0].source.id);
         console.log(this.newList[0].author);
         console.log(this.newList[0].source); // json format
       }
     },error=>{})
  }

  addNews(news : any) : void {
    this.newsService.addNews(news).subscribe(res=>{
      if(res)
      {
        alert("added!!!!");
      }
    },error=>{})

  }
}
