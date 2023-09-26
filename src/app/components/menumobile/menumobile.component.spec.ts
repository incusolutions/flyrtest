import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumobileComponent } from './menumobile.component';

describe('MenumobileComponent', () => {
  let component: MenumobileComponent;
  let fixture: ComponentFixture<MenumobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenumobileComponent]
    });
    fixture = TestBed.createComponent(MenumobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
