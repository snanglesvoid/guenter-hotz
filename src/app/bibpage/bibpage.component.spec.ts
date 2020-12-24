import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibpageComponent } from './bibpage.component';

describe('BibpageComponent', () => {
  let component: BibpageComponent;
  let fixture: ComponentFixture<BibpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
