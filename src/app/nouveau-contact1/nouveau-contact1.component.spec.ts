import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauContact1Component } from './nouveau-contact1.component';

describe('NouveauContact1Component', () => {
  let component: NouveauContact1Component;
  let fixture: ComponentFixture<NouveauContact1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauContact1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauContact1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
