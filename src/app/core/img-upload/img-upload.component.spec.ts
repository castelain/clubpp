import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgUploadComponent } from './img-upload.component';

describe('ImgUploadComponent', () => {
  let component: ImgUploadComponent;
  let fixture: ComponentFixture<ImgUploadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
