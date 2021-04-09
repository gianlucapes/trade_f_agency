import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipartimentiDetailComponent } from './dipartimenti-detail.component';

describe('DipartimentiDetailComponent', () => {
  let component: DipartimentiDetailComponent;
  let fixture: ComponentFixture<DipartimentiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipartimentiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipartimentiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
