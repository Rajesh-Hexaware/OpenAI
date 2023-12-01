import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouppermissionsComponent } from './grouppermissions.component';

describe('GrouppermissionsComponent', () => {
  let component: GrouppermissionsComponent;
  let fixture: ComponentFixture<GrouppermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouppermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrouppermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
