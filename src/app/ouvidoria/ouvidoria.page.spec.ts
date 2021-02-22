import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OuvidoriaPage } from './ouvidoria.page';

describe('OuvidoriaPage', () => {
  let component: OuvidoriaPage;
  let fixture: ComponentFixture<OuvidoriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuvidoriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OuvidoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
