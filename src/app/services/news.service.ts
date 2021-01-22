
import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  constructor(private httpClient : HttpClient) { }

  readNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3f09acf7f9f743c7baee71015538f204");
  }

  addNews(news : any) : Observable<any>
  {
    alert(news);
  // return this.httpClient.post<any>("http://localhost:3000/sources",news);
   return this.httpClient.post<any>("http://localhost:9090/api/v1/news/addNews",news);
  }

}
