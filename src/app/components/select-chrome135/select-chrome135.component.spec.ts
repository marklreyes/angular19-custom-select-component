import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChrome135Component } from './select-chrome135.component';

describe('SelectChrome135Component', () => {
  let component: SelectChrome135Component;
  let fixture: ComponentFixture<SelectChrome135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectChrome135Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectChrome135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
