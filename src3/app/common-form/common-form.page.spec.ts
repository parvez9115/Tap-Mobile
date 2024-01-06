import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonFormPage } from './common-form.page';

describe('CommonFormPage', () => {
  let component: CommonFormPage;
  let fixture: ComponentFixture<CommonFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
