import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiveComponent } from './sidebar-five.component';

describe('SidebarFiveComponent', () => {
  let component: SidebarFiveComponent;
  let fixture: ComponentFixture<SidebarFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
