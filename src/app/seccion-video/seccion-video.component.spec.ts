import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionVideoComponent } from './seccion-video.component';

describe('SeccionVideoComponent', () => {
  let component: SeccionVideoComponent;
  let fixture: ComponentFixture<SeccionVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
