//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

//components
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdItemComponent } from './prod-item/prod-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { favReducer } from './Fav/Fav.reducer';
import { FavProductsComponent } from './fav-products/fav-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    ProdItemComponent,
    NavbarComponent,
    ProdDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    FavProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ favReducer : favReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
