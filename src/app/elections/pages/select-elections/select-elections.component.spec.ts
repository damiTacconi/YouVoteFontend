import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElectionsComponent } from './select-elections.component';

describe('SelectElectionsComponent', () => {
  let component: SelectElectionsComponent;
  let fixture: ComponentFixture<SelectElectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectElectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
