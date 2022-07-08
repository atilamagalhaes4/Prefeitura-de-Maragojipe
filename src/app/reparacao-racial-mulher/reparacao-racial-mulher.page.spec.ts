import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReparacaoRacialMulherPage } from './reparacao-racial-mulher.page';

describe('ReparacaoRacialMulherPage', () => {
  let component: ReparacaoRacialMulherPage;
  let fixture: ComponentFixture<ReparacaoRacialMulherPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparacaoRacialMulherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReparacaoRacialMulherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
