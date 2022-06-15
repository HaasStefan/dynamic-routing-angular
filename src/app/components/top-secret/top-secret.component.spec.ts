import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSecretComponent } from './top-secret.component';

describe('TopSecretComponent', () => {
  let component: TopSecretComponent;
  let fixture: ComponentFixture<TopSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
