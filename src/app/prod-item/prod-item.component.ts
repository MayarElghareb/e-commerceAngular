import { Component, Input, OnInit  , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {
@Input() productItem : any;
@Output() sendProduct = new EventEmitter<any>();
@Output()  sendCart = new EventEmitter<any>() ;
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    console.log(this.productItem);
    this.sendProduct.emit(this.productItem);
    
    
  }
  sendCartToParent(){
    this.sendCart.emit(this.productItem);
  }
}
