import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OMunicipioPage } from './o-municipio.page';

describe('OMunicipioPage', () => {
  let component: OMunicipioPage;
  let fixture: ComponentFixture<OMunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OMunicipioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OMunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
