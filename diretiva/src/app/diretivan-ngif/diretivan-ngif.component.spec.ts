import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivanNgifComponent } from './diretivan-ngif.component';

describe('DiretivanNgifComponent', () => {
  let component: DiretivanNgifComponent;
  let fixture: ComponentFixture<DiretivanNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivanNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivanNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
