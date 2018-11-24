import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategoriasComponent } from './get-categorias.component';

describe('GetCategoriasComponent', () => {
  let component: GetCategoriasComponent;
  let fixture: ComponentFixture<GetCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
