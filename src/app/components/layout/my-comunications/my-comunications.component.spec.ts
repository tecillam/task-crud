import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComunicationsComponent } from './my-comunications.component';

describe('MyComunicationsComponent', () => {
  let component: MyComunicationsComponent;
  let fixture: ComponentFixture<MyComunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComunicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
