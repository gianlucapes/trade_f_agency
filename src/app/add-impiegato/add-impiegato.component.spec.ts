import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImpiegatoComponent } from './add-impiegato.component';

describe('AddImpiegatoComponent', () => {
  let component: AddImpiegatoComponent;
  let fixture: ComponentFixture<AddImpiegatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddImpiegatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
