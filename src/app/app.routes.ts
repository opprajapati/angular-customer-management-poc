import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrderComponent } from './components/order/order.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { ListviewComponent } from './components/listview/listview.component';
import { MapviewComponent } from './components/mapview/mapview.component';
import { NewcustomerComponent } from './components/newcustomer/newcustomer.component';
import { SearchviewComponent } from './components/searchview/searchview.component';

export const routes: Routes = [
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:"header" ,component:HeaderComponent},
    {path:"customers", component: CustomersComponent, children:[
        {path:"gridview",component:GridviewComponent},
        {path:"listview" ,component:ListviewComponent},
        {path:"mapview", component:MapviewComponent},
        {path:"newcustomer", component:NewcustomerComponent},
        {path:"searchview" ,component:SearchviewComponent}
    ]},
    {path:"orders", component:OrderComponent },
    {path:"about" ,component: AboutComponent},
    {path:"logout", component:LogoutComponent},
    {path:"login",component:LoginComponent}
    
];
