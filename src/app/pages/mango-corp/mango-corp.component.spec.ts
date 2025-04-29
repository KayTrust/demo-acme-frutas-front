import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangoCorpComponent } from './mango-corp.component';

describe('MangoCorpComponent', () => {
  let component: MangoCorpComponent;
  let fixture: ComponentFixture<MangoCorpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangoCorpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangoCorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
