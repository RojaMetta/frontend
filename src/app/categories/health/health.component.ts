import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthList : Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(){
    this.newsService.healthNews().subscribe(response=>{
      if(response)
      {
        this.healthList=response['articles'];
    }
  },error=>{})
 }
}
