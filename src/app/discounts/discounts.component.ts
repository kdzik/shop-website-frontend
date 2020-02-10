import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { Product, ProductDataService } from '../service/products/product-data.service';
import { shareReplay, map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent implements OnInit {

  productsOnDiscount$: Observable<Product[]>;
  @ViewChild('owl', {static: false}) owl;

  constructor(
    private productService: ProductDataService
  ) { }

  ngOnInit() {
    this.refreshProducts();
  }

  refreshProducts(){
    const http$ = this.productService.retrieveAllProducts();
    const products$: Observable<Product[]> = http$
    .pipe(
      shareReplay()
    );

    this.productsOnDiscount$ = products$.pipe(
      map(
        products => products
        .filter(product => product.productDiscount != "")
      )
    );

  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoHeight: true,
    autoWidth: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 1500
  }

}


