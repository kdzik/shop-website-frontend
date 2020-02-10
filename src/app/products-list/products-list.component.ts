import { Component, OnInit } from '@angular/core';
import { Product, ProductDataService } from '../service/products/product-data.service';
import { groupBy, map, shareReplay, tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  pieczywo$: Observable<Product[]>;
  nabial$: Observable<Product[]>;
  napoje$: Observable<Product[]>;

  route;
  paginationLimit: number;
  startPage: number;
  constructor(
    private productService: ProductDataService,
    private basicAuth: BasicAuthenticationService,
    private router: Router,
    private jwt: JwtAuthenticationService
  ) {
    this.startPage = 0;
    this.paginationLimit = 6;
  }

  ngOnInit() {
    this.refreshProducts();
    this.route = this.router.url;
  }

  refreshProducts(){
    const http$ = this.productService.retrieveAllProducts();
    const products$: Observable<Product[]> = http$
    .pipe(
      shareReplay()
    );

    this.pieczywo$ = products$.pipe(
      map(
        products => products
        .filter(product => product.productCategory == "Pieczywo")
      )
    );

    this.nabial$ = products$.pipe(
      map(
        products => products
        .filter(product => product.productCategory == "Nabial")
      )
    );

    this.napoje$ = products$.pipe(
      map(
        products => products
        .filter(product => product.productCategory == "Napoje")
      )
    );

  }

  isUserLoggedIn(){
    return this.jwt.isUserLoggedIn();
  }
}
