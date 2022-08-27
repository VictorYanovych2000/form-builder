import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CatalogComponent} from "./main/list/catalog/catalog/catalog.component";
import {OrdersComponent} from "./main/list/orders/orders/orders.component";
import {CustomersComponent} from "./main/list/customers/customers/customers.component";

const appRoutes: Routes = [
  {
    path: 'main', component: MainComponent,
    children: [
      {
        path: 'catalog', component: CatalogComponent
      },
      {
        path: 'customers', component: CustomersComponent
      },
      {
        path: 'orders', component: OrdersComponent
      }]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
