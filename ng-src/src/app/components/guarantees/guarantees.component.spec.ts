import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteesComponent } from './guarantees.component';

describe('GuaranteesComponent', () => {
  let component: GuaranteesComponent;
  let fixture: ComponentFixture<GuaranteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuaranteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuaranteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
