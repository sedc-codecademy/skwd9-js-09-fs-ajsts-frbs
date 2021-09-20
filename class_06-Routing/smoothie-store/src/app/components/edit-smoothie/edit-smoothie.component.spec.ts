import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSmoothieComponent } from './edit-smoothie.component';

describe('EditSmoothieComponent', () => {
  let component: EditSmoothieComponent;
  let fixture: ComponentFixture<EditSmoothieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSmoothieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSmoothieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
