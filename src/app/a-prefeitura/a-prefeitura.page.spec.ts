import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { APrefeituraPage } from './a-prefeitura.page';

describe('APrefeituraPage', () => {
  let component: APrefeituraPage;
  let fixture: ComponentFixture<APrefeituraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APrefeituraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APrefeituraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
