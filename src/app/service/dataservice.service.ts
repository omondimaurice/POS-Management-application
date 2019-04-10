import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Pos } from 'git/src/app/pos/pos.component';






@Injectable({
  providedIn: 'root'
})



export class DataserviceService {



  constructor(
    private http:HttpClient
  ) { }




  retrieveAllPos(){
    return this.http.get<Pos[]>(`http://localhost:8080/pos-list`)
  }



  deletePos(id){
    //HAVE USED DOLLAR SIGN TO PASS ID BUT ITS THROWING "UNDEFINED " ERROR 
   return  this.http.delete(`http://localhost:8080/delete-pos/${id}`);


  }

  getPos(id){

    return this.http.get<Pos>(`http://localhost:8080/pos/${id}`)
  }

  updatePos(id,pos){

    return this.http.put(`http://localhost:8080/update-pos/${id}`,pos);
  }

  

}
