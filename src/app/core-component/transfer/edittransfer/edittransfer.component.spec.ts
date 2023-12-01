import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransferComponent } from './edittransfer.component';

describe('EdittransferComponent', () => {
  let component: EdittransferComponent;
  let fixture: ComponentFixture<EdittransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
