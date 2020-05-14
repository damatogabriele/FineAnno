import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

   private REST_API_SERVER = "http://api.icndb.com/jokes/random/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRandomRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
    
  }

}

