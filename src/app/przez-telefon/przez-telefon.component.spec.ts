import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzezTelefonComponent } from './przez-telefon.component';

describe('PrzezTelefonComponent', () => {
  let component: PrzezTelefonComponent;
  let fixture: ComponentFixture<PrzezTelefonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzezTelefonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzezTelefonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
