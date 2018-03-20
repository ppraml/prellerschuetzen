import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GedenkenComponent } from './gedenken.component';

describe('GedenkenComponent', () => {
  let component: GedenkenComponent;
  let fixture: ComponentFixture<GedenkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GedenkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GedenkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
