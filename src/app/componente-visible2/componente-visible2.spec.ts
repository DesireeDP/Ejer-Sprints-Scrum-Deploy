import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteVisible2 } from './componente-visible2';

describe('ComponenteVisible2', () => {
  let component: ComponenteVisible2;
  let fixture: ComponentFixture<ComponenteVisible2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteVisible2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteVisible2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//Commentario: Este archivo de prueba unitaria verifica que el componente ComponenteVisible2 se crea correctamente sin errores.
