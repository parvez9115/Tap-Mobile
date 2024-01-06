import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtoPage } from './rto.page';

describe('RtoPage', () => {
  let component: RtoPage;
  let fixture: ComponentFixture<RtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
