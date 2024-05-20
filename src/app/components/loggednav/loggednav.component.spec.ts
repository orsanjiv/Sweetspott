import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggednavComponent } from './loggednav.component';

describe('LoggednavComponent', () => {
  let component: LoggednavComponent;
  let fixture: ComponentFixture<LoggednavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggednavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
