import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachmentFormComponent } from './detachment-form.component';

describe('DetachmentFormComponent', () => {
  let component: DetachmentFormComponent;
  let fixture: ComponentFixture<DetachmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
