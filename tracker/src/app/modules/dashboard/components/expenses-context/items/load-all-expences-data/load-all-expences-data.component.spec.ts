import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllExpencesDataComponent } from './load-all-expences-data.component';

describe('LoadAllExpencesDataComponent', () => {
  let component: LoadAllExpencesDataComponent;
  let fixture: ComponentFixture<LoadAllExpencesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAllExpencesDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAllExpencesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
