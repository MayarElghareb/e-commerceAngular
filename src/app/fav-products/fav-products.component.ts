import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveFromFav } from '../Fav/Fav.action';

@Component({
  selector: 'app-fav-products',
  templateUrl: './fav-products.component.html',
  styleUrls: ['./fav-products.component.css']
})
export class FavProductsComponent implements OnInit {

  constructor(private store : Store<any>) { }

  favlist;

  ngOnInit(): void {
    this.store.select('favReducer').subscribe(data => {
      this.favlist = data.favList; 
  }
)
  }
  
  remove(id) {
    this.store.dispatch(new RemoveFromFav(id))
    
  }

}
