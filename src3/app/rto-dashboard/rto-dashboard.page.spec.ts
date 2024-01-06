import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtoDashboardPage } from './rto-dashboard.page';

describe('RtoDashboardPage', () => {
  let component: RtoDashboardPage;
  let fixture: ComponentFixture<RtoDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtoDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtoDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
