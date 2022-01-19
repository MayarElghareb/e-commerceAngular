import { Component, OnInit } from '@angular/core';
import { ProductWishlistService } from '../product-wishlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : ProductWishlistService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      console.log('test',this.products)
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
 

}
  

