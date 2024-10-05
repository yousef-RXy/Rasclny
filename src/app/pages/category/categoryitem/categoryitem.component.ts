import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-categoryitem',
  templateUrl: './categoryitem.component.html',
  styleUrls: ['./categoryitem.component.css']
})
export class CategoryitemComponent {
@Input() category?:any;
}
