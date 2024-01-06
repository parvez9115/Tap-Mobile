import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExcellUploaderPage } from './excell-uploader.page';

describe('ExcellUploaderPage', () => {
  let component: ExcellUploaderPage;
  let fixture: ComponentFixture<ExcellUploaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcellUploaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExcellUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
