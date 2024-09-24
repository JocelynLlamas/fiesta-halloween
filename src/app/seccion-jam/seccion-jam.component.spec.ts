import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionJamComponent } from './seccion-jam.component';

describe('SeccionJamComponent', () => {
  let component: SeccionJamComponent;
  let fixture: ComponentFixture<SeccionJamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionJamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
