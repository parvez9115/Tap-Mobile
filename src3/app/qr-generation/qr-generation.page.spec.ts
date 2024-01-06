import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrGenerationPage } from './qr-generation.page';

describe('QrGenerationPage', () => {
  let component: QrGenerationPage;
  let fixture: ComponentFixture<QrGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrGenerationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
