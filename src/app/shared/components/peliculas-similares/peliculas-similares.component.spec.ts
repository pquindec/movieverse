import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasSimilaresComponent } from './peliculas-similares.component';

describe('PeliculasSimilaresComponent', () => {
  let component: PeliculasSimilaresComponent;
  let fixture: ComponentFixture<PeliculasSimilaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculasSimilaresComponent]
    });
    fixture = TestBed.createComponent(PeliculasSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
