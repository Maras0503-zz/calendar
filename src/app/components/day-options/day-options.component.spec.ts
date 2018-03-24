import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOptionsComponent } from './day-options.component';

describe('DayOptionsComponent', () => {
  let component: DayOptionsComponent;
  let fixture: ComponentFixture<DayOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
