import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { PrzezTelefonComponent } from "./przez-telefon/przez-telefon.component";
import { MainComponent } from "./main/main.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { ProductsListComponent } from './products-list/products-list.component';
import { AuthGuard } from './auth/auth.guard';

const extraOptions: ExtraOptions = {
  //  anchorScrolling: 'enabled',
};

const routes: Routes = [
  { path: 'przez-telefon', component: PrzezTelefonComponent, data: { animation: 'przezTelefon'} },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [

      { path: '', component: ProductsListComponent },
      { path: 'edit-product/:id', component: EditProductComponent }

    ]
  },
  { path: '', component: MainComponent, data: { animation: 'main'} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }