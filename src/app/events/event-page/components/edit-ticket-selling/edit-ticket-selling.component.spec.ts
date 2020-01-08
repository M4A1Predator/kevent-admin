import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketSellingComponent } from './edit-ticket-selling.component';

describe('EditTicketSellingComponent', () => {
  let component: EditTicketSellingComponent;
  let fixture: ComponentFixture<EditTicketSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
