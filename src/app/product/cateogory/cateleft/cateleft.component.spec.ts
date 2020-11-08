import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateleftComponent } from './cateleft.component';

describe('CateleftComponent', () => {
  let component: CateleftComponent;
  let fixture: ComponentFixture<CateleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
