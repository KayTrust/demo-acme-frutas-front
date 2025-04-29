import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionQrComponent } from './section-qr.component';

describe('SectionQrComponent', () => {
  let component: SectionQrComponent;
  let fixture: ComponentFixture<SectionQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionQrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
