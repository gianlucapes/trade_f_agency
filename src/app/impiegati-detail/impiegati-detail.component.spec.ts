import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpiegatiDetailComponent } from './impiegati-detail.component';

describe('ImpiegatiDetailComponent', () => {
  let component: ImpiegatiDetailComponent;
  let fixture: ComponentFixture<ImpiegatiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpiegatiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpiegatiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
