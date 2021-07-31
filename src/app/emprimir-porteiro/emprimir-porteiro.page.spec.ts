import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmprimirPorteiroPage } from './emprimir-porteiro.page';

describe('EmprimirPorteiroPage', () => {
  let component: EmprimirPorteiroPage;
  let fixture: ComponentFixture<EmprimirPorteiroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprimirPorteiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmprimirPorteiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
