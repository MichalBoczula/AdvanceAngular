import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponentsAndDatabindingComponent } from './manager-components-and-databinding.component';

describe('ManagerComponentsAndDatabindingComponent', () => {
  let component: ManagerComponentsAndDatabindingComponent;
  let fixture: ComponentFixture<ManagerComponentsAndDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerComponentsAndDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponentsAndDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
