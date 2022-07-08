import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorridaSaoBartolomeuPage } from './corrida-sao-bartolomeu.page';

describe('CorridaSaoBartolomeuPage', () => {
  let component: CorridaSaoBartolomeuPage;
  let fixture: ComponentFixture<CorridaSaoBartolomeuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorridaSaoBartolomeuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaSaoBartolomeuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
