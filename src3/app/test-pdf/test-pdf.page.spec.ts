import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestPDFPage } from './test-pdf.page';

describe('TestPDFPage', () => {
  let component: TestPDFPage;
  let fixture: ComponentFixture<TestPDFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPDFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPDFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
