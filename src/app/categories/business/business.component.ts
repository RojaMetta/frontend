import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessList : Array<any>;
  
  constructor(private newsService : NewsService) { }

  ngOnInit(){
    this.newsService.businessNews().subscribe(response=>{
      if(response)
      {
        this.businessList=response['articles'];
    }
  },error=>{})
 }
}
  
  