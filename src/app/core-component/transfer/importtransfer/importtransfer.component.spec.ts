import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporttransferComponent } from './importtransfer.component';

describe('ImporttransferComponent', () => {
  let component: ImporttransferComponent;
  let fixture: ComponentFixture<ImporttransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporttransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImporttransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
