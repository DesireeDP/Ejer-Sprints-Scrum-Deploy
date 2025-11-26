import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoComponenteVisible } from './nuevo-componente-visible';

describe('NuevoComponenteVisible', () => {
  let component: NuevoComponenteVisible;
  let fixture: ComponentFixture<NuevoComponenteVisible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoComponenteVisible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoComponenteVisible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
