import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogoryComponent } from './cateogory.component';

describe('CateogoryComponent', () => {
  let component: CateogoryComponent;
  let fixture: ComponentFixture<CateogoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
