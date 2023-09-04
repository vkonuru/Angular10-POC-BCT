import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCompComponent } from './tabs-comp.component';

describe('TabsCompComponent', () => {
  let component: TabsCompComponent;
  let fixture: ComponentFixture<TabsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
