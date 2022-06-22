import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibPrintComponent } from './bib-print.component';

describe('BibPrintComponent', () => {
  let component: BibPrintComponent;
  let fixture: ComponentFixture<BibPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
