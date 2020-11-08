import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproComponent } from './detailpro.component';

describe('DetailproComponent', () => {
  let component: DetailproComponent;
  let fixture: ComponentFixture<DetailproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
