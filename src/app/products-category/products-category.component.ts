import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDataService } from '../service/products/product-data.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {

@Input() products: Observable<Product[]>;
@Input() categoryName: string;
startPage;
paginationLimit;
counter: number;
route;
deleteModal: boolean;
deletedProduct: Product;

  constructor(
    private basicAuth: BasicAuthenticationService,
    private router: Router,
    private productService: ProductDataService,
    private list: ProductsListComponent,
    private jwt: JwtAuthenticationService
  ) { }

  ngOnInit() {
    console.log(this.products);
    this.startPage = 0;
    this.paginationLimit = 6;
    this.route = this.router.url;
  }

  isUserLoggedIn(){
    return this.jwt.isUserLoggedIn();
  }


  deleteProduct(id){
    this.productService.deleteProduct(id)
    .subscribe(
      response => {
        this.list.refreshProducts();
        this.deleteModal = !this.deleteModal;
      }
    );
  }

}
