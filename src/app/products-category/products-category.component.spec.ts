import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryComponent } from './products-category.component';

describe('ProductsCategoryComponent', () => {
  let component: ProductsCategoryComponent;
  let fixture: ComponentFixture<ProductsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
