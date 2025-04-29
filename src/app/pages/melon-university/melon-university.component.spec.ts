import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelonUniversityComponent } from './melon-university.component';

describe('MelonUniversityComponent', () => {
  let component: MelonUniversityComponent;
  let fixture: ComponentFixture<MelonUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelonUniversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelonUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
