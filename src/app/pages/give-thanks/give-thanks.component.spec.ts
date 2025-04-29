import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveThanksComponent } from './give-thanks.component';

describe('GiveThanksComponent', () => {
  let component: GiveThanksComponent;
  let fixture: ComponentFixture<GiveThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveThanksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
