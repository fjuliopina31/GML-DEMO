import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClientsComponent } from './edit-clients.component';

describe('EditMoviesComponent', () => {
  let component: EditMoviesComponent;
  let fixture: ComponentFixture<EditMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
