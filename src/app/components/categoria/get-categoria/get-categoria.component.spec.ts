import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategoriaComponent } from './get-categoria.component';

describe('GetCategoriaComponent', () => {
  let component: GetCategoriaComponent;
  let fixture: ComponentFixture<GetCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
