import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64Decoder } from './base64-decoder';

describe('Base64Decoder', () => {
  let component: Base64Decoder;
  let fixture: ComponentFixture<Base64Decoder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Base64Decoder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64Decoder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
