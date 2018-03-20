import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VereinsinfoComponent } from './vereinsinfo.component';

describe('VereinsinfoComponent', () => {
  let component: VereinsinfoComponent;
  let fixture: ComponentFixture<VereinsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VereinsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VereinsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
