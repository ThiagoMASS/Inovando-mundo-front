import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelacardComponent } from './telacard.component';

describe('TelacardComponent', () => {
  let component: TelacardComponent;
  let fixture: ComponentFixture<TelacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelacardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
