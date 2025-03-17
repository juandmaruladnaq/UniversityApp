import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyModalComponent } from './qualify-modal.component';

describe('QualifyModalComponent', () => {
  let component: QualifyModalComponent;
  let fixture: ComponentFixture<QualifyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualifyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
