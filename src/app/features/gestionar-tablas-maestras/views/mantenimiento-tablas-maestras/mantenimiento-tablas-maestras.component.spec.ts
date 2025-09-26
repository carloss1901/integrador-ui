import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoTablasMaestrasComponent } from './mantenimiento-tablas-maestras.component';

describe('MantenimientoTablasMaestrasComponent', () => {
  let component: MantenimientoTablasMaestrasComponent;
  let fixture: ComponentFixture<MantenimientoTablasMaestrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoTablasMaestrasComponent]
    });
    fixture = TestBed.createComponent(MantenimientoTablasMaestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
