import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipartimentiComponent } from './dipartimenti.component';

describe('DipartimentiComponent', () => {
  let component: DipartimentiComponent;
  let fixture: ComponentFixture<DipartimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipartimentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipartimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
