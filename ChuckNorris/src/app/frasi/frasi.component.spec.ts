import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasiComponent } from './frasi.component';

describe('FrasiComponent', () => {
  let component: FrasiComponent;
  let fixture: ComponentFixture<FrasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
