import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {path :'' , component: ProdListComponent ,},
  {
    path: 'product/:id',
    component: ProdDetailsComponent,
  },
  {
  path :'login' , component : LoginComponent ,
},
{
  path :'register' , component : RegisterComponent ,
},
{
  path :'cart' , component : CartComponent ,
},
  { path: "**", component: ProdListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
