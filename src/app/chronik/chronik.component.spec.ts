import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronikComponent } from './chronik.component';

describe('ChronikComponent', () => {
  let component: ChronikComponent;
  let fixture: ComponentFixture<ChronikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
