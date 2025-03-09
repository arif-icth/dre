import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreFormComponent } from './dre-form.component';

describe('DreFormComponent', () => {
  let component: DreFormComponent;
  let fixture: ComponentFixture<DreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DreFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
