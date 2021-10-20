import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesPageComponent } from './paquetes-page.component';

describe('PaquetesPageComponent', () => {
  let component: PaquetesPageComponent;
  let fixture: ComponentFixture<PaquetesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaquetesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
