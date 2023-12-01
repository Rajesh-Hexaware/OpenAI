import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFourComponent } from './sidebar-four.component';

describe('SidebarFourComponent', () => {
  let component: SidebarFourComponent;
  let fixture: ComponentFixture<SidebarFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
