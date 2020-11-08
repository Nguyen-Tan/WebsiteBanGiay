import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterightComponent } from './cateright.component';

describe('CaterightComponent', () => {
  let component: CaterightComponent;
  let fixture: ComponentFixture<CaterightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
