import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalproductComponent } from './detalproduct.component';

describe('DetalproductComponent', () => {
  let component: DetalproductComponent;
  let fixture: ComponentFixture<DetalproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
