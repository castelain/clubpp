import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAClubComponent } from './create-a-club.component';

describe('CreateAClubComponent', () => {
  let component: CreateAClubComponent;
  let fixture: ComponentFixture<CreateAClubComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAClubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
