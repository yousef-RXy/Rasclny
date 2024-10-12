import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopComponent } from './home-top.component';

describe('HomeTopComponent', () => {
  let component: HomeTopComponent;
  let fixture: ComponentFixture<HomeTopComponent>;

<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopComponent]
    });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTopComponent]
    })
    .compileComponents();

>>>>>>> c79c2d7e9de3e1ad0dc9d298017d54b4bcb1054f
    fixture = TestBed.createComponent(HomeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
