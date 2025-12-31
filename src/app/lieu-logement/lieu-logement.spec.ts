import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuLogement } from './lieu-logement';

describe('LieuLogement', () => {
  let component: LieuLogement;
  let fixture: ComponentFixture<LieuLogement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LieuLogement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieuLogement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
