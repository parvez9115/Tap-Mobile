import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealerCertificationListPage } from './dealer-certification-list.page';

describe('DealerCertificationListPage', () => {
  let component: DealerCertificationListPage;
  let fixture: ComponentFixture<DealerCertificationListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerCertificationListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealerCertificationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
