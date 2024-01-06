import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcodeListPage } from './qrcode-list.page';

describe('QrcodeListPage', () => {
  let component: QrcodeListPage;
  let fixture: ComponentFixture<QrcodeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
