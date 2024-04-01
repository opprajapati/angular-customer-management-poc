import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent,DialogModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
