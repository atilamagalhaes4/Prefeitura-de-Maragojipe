import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelefonesUteisPage } from './telefones-uteis.page';

describe('TelefonesUteisPage', () => {
  let component: TelefonesUteisPage;
  let fixture: ComponentFixture<TelefonesUteisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonesUteisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelefonesUteisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
