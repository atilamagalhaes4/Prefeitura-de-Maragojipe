import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdcionarAuxiliarPage } from './adcionar-auxiliar.page';

describe('AdcionarAuxiliarPage', () => {
  let component: AdcionarAuxiliarPage;
  let fixture: ComponentFixture<AdcionarAuxiliarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcionarAuxiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdcionarAuxiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
