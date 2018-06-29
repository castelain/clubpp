import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinAClubComponent } from './join-a-club.component';

describe('JoinAClubComponent', () => {
  let component: JoinAClubComponent;
  let fixture: ComponentFixture<JoinAClubComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinAClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
