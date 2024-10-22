import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineMenuComponent } from './line-menu.component';

describe('LineMenuComponent', () => {
  let component: LineMenuComponent;
  let fixture: ComponentFixture<LineMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineMenuComponent]
    });
    fixture = TestBed.createComponent(LineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
