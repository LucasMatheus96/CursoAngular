import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateFormComponent } from './teamplate-form.component';

describe('TeamplateFormComponent', () => {
  let component: TeamplateFormComponent;
  let fixture: ComponentFixture<TeamplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
