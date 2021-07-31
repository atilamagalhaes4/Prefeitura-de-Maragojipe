import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmprimirAuxiliarPage } from './emprimir-auxiliar.page';

describe('EmprimirAuxiliarPage', () => {
  let component: EmprimirAuxiliarPage;
  let fixture: ComponentFixture<EmprimirAuxiliarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprimirAuxiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmprimirAuxiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
