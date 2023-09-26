import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDestinationsComponent } from './cards-destinations.component';

describe('CardsDestinationsComponent', () => {
  let component: CardsDestinationsComponent;
  let fixture: ComponentFixture<CardsDestinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsDestinationsComponent]
    });
    fixture = TestBed.createComponent(CardsDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
