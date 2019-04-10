import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';


export class Pos{
 
  constructor(
    public id:number,
    public serialNumber: string,
    public make:string,
    public owner: string,
    public timestamp:Date,
   
  )
  
  {

   
  }
  
  
  }

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})


export class PosComponent implements OnInit {
poss:Pos[];
message:string;



 
  constructor(private dataserviceservice:DataserviceService, private router:Router
    ) { }

  ngOnInit() {
    this.dataserviceservice.retrieveAllPos().subscribe(response=>{
      console.log(response);
      this.poss=response;
    });
  }
    deletePos(id){
      console.log(`deleted pos ${id}`)
this.dataserviceservice.deletePos(id).subscribe(
  response=>{
    console.log(response);
    this.message='POS serial number successfully deleted!'
  }
)
  
  }
  
  
  updatePos(id){
    console.log(`update  pos ${id}`);
    this.router.navigate(['pos-list',id])

} 
addPos(){
  this.router.navigate(['pos-list',-1])
}
}
