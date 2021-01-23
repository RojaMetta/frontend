
import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NewsService {

  constructor(private httpClient : HttpClient) { }

  readNews() : Observable<Array<any>>
  {
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }
  
  businessNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }

  entertainmentNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }

  generalNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }

  healthNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }

  scienceNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }

  sportsNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }
  
  technologyNews():  Observable<Array<any>>{
    return this.httpClient.get<Array<any>>("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bca632a9615542d19d21ab59d4b006e7");
  }



  addNews(news : any) : Observable<any>
  {
    alert(news);
  // return this.httpClient.post<any>("http://localhost:3000/sources",news);
   return this.httpClient.post<any>("http://localhost:9090/api/v1/news/addNews",news);
  }

}
