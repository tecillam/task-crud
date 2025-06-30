import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDevolutionsComponent } from './my-devolutions.component';

describe('MyDevolutionsComponent', () => {
  let component: MyDevolutionsComponent;
  let fixture: ComponentFixture<MyDevolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDevolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDevolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
