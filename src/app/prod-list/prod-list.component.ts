import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdItemComponent } from '../prod-item/prod-item.component';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ProductWishlistService } from '../product-wishlist.service';
import { Store } from '@ngrx/store';

import { AddToFav } from '../Fav/Fav.action';


@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
 productList;
 wishlistCounter;
    @ViewChild(ProdItemComponent) childComponent;
    constructor(private router : Router , private prodService:ProductsService , private wishlistService: ProductWishlistService ,private store : Store<any>) {}

  ngOnInit(): void {
    // this.wishlistService.currentWishlistCount.subscribe(
    //   (value) => (this.wishlistCounter = value)
    // );
    this.prodService.getProduct().subscribe(
      (res) => {
        this.productList = res;
        
        
        this.productList.forEach((a:any) => {
          if(a.category ==="women's clothing" || a.category ==="men's clothing"){
            a.category ="fashion"
          }
          Object.assign(a,{quantity:1,total:a.price});
        });
        console.log(this.productList)
      });
  
     
    }
    addToFav(product) {
      this.store.dispatch(new AddToFav(product))
      
    }
  
    // addtocart(product){
    //   this.wishlistService.addtoCart(product);
     
    // }
    // filter(category:string){
    //   this.filterCategory = this.productList
    //   .filter((a:any)=>{
    //     if(a.category == category || category==''){
    //       return a;
    //     }
    //   })
    // }






  receiveProduct(productItem) {
   
    this.router.navigate([`product/${productItem.id}`]);
   
    

  }
// recieveCart(productItem){
//   this.wishlistService.updateWishlistCounter(this.wishlistCounter+1)

// }

}

