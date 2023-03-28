import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberShufflePageComponent } from './member-shuffle-page.component';

describe('MemberShufflePageComponent', () => {
  let component: MemberShufflePageComponent;
  let fixture: ComponentFixture<MemberShufflePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberShufflePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberShufflePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
