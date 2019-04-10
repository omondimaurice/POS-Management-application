import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WelcomeserviceService {

  constructor(private httpClient:HttpClient) { }

  HelloWorldBeanService(){
  
   return this.httpClient.get('http://localhost:8080/hello');
  }

  HellohtmlService(){
    return this.httpClient.get('http://localhost:8080/helloworld');
  }

  NextData(){

    return this.httpClient.get("http://localhost:8080/nextdata");
  }
}
