import { Component, OnInit } from '@angular/core';
import{ DataserviceService} from'../service/dataservice.service';
import { Pos } from '../pos/pos.component';
import { ActivatedRoute } from '@angular/router';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

id:number;
pos:Pos;


  constructor(private dataservice : DataserviceService,private route :ActivatedRoute,private router :Router) { }



  ngOnInit() {

this.id=this.route.snapshot.params['id']
this.pos= new Pos(this.id,'','','', new Date);
if(this.id !==-1){
  this.dataservice.getPos(this.id).subscribe(

    data=>this.pos=data);
}
    
    
  }
savePos(){
  this.dataservice.updatePos(this.id,this.pos).subscribe(
   
    data=>{
      console.log(data);
    this.router.navigate(["pos-list"])
    }
    
  )
}
}
