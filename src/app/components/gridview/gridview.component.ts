import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { GetCustomersService } from '../../services/get-customers.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gridview',
  standalone: true,
  imports: [MatGridListModule,MatCardModule,CommonModule],
  templateUrl: './gridview.component.html',
  styleUrl: './gridview.component.css'
})
export class GridviewComponent implements OnInit {
  allCustomersData:any=[]
  constructor( private getData:GetCustomersService){}
ngOnInit() {
   this.getCustomerdata()
}
getCustomerdata(){
  this.getData.getCustomerssData().subscribe((res)=>{
     console.log(res)
     this.allCustomersData=res
  })
}
}
