import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainmentList : Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(){
    this.newsService.entertainmentNews().subscribe(response=>{
      if(response)
      {
        this.entertainmentList=response['articles'];
    }
  },error=>{})
 }
}
