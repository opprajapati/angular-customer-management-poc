import { Component, OnInit, ViewChild} from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { GetCustomersService } from '../../services/get-customers.service';
import { HttpClientModule } from '@angular/common/http';
import { GetCustomersImagesService } from '../../services/get-customers-images.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-listview',
  standalone: true,
  imports: [TableModule,ButtonModule,HttpClientModule,MatPaginatorModule ,RouterModule,MatDialogModule ],
  templateUrl: './listview.component.html',
  styleUrl: './listview.component.css'
})
export class ListviewComponent implements OnInit {
  allCustomers:any=[]
  images:any=[] 
  pageSizeOptions:any
  // dataSouce=  new MatTableDataSoucre()
  // @ViewChild(MatPaginator) paginator:MatPaginator
 constructor(private getCustmer:GetCustomersService,private getimage:GetCustomersImagesService , private route:Router){}
 ngOnInit(): void {
   this.getAllCustomers(),
this.getAllImages()

 }
 ngAfterViewInit(){

 }
getAllCustomers(){
  this.getCustmer.getCustomerssData()
  .subscribe((res)=>{
    this.allCustomers=res
  })
  
}
 
getAllImages(){
 this.getimage.getAllImage().subscribe((res)=>{
  console.log(res)
    this.images=res
 })
}

onEditUser(){
  
}
}
