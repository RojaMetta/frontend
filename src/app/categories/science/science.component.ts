import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceList : Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(){
    this.newsService.scienceNews().subscribe(response=>{
      if(response)
      {
        this.scienceList=response['articles'];
    }
  },error=>{})
 }
}