import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRtosPage } from './add-rtos.page';

describe('AddRtosPage', () => {
  let component: AddRtosPage;
  let fixture: ComponentFixture<AddRtosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRtosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRtosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
