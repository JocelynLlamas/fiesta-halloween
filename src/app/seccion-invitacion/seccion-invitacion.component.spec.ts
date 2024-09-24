import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInvitacionComponent } from './seccion-invitacion.component';

describe('SeccionInvitacionComponent', () => {
  let component: SeccionInvitacionComponent;
  let fixture: ComponentFixture<SeccionInvitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionInvitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInvitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
