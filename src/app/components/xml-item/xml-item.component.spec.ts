import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlItemComponent } from './xml-item.component';

describe('XmlItemComponent', () => {
  let component: XmlItemComponent;
  let fixture: ComponentFixture<XmlItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
