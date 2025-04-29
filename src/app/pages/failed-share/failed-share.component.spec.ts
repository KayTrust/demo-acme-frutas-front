import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedShareComponent } from './failed-share.component';

describe('FailedShareComponent', () => {
  let component: FailedShareComponent;
  let fixture: ComponentFixture<FailedShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
