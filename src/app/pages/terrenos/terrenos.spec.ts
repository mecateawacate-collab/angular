import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terrenos } from './terrenos';

describe('Terrenos', () => {
  let component: Terrenos;
  let fixture: ComponentFixture<Terrenos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terrenos],
    }).compileComponents();

    fixture = TestBed.createComponent(Terrenos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
