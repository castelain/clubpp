import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAClubComponent } from './edit-a-club.component';

describe('EditAClubComponent', () => {
  let component: EditAClubComponent;
  let fixture: ComponentFixture<EditAClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
