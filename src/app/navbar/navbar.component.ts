import { Component, OnInit } from '@angular/core';
import { ProductWishlistService } from '../product-wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
wishlistCounter;
public totalItem : number = 0;
  constructor(private wishlistService:ProductWishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  }


