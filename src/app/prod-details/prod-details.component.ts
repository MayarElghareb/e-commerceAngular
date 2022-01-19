import { Component, OnInit ,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductsService } from '../products.service';
import { element } from 'protractor';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
 
 productList2;
 
  constructor(private route: ActivatedRoute , private details:ProductsService) {}
  item:any;
  ngOnInit(): void {
    console.log('hello');
    this.route.params.subscribe(param =>{
  this.item =  this.details.getProductDetails(param.id).subscribe(
      (res) => {
        this.productList2 = res;
        console.log(res)
      },
      (error) => {
        console.log(error);
      }
    );
  
   
    //  this.route.params.subscribe(param =>{
    //    this.item = this.productList2.find((element:any)=>{
    //      return element.id = param.id
    //    });
    //   });
    //  console.log (this.item.title);
    //   }
    
  });
  }
}
