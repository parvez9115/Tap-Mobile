import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusModalPage } from './status-modal.page';

describe('StatusModalPage', () => {
  let component: StatusModalPage;
  let fixture: ComponentFixture<StatusModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
