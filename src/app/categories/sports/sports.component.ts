import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsList : Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(){
    this.newsService.sportsNews().subscribe(response=>{
      if(response)
      {
        this.sportsList=response['articles'];
    }
  },error=>{})
 }
}
