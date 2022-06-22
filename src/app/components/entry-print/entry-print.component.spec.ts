import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPrintComponent } from './entry-print.component';

describe('EntryPrintComponent', () => {
  let component: EntryPrintComponent;
  let fixture: ComponentFixture<EntryPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
