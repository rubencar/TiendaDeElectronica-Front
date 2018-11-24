import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCategoriaComponent } from './save-categoria.component';

describe('SaveCategoriaComponent', () => {
  let component: SaveCategoriaComponent;
  let fixture: ComponentFixture<SaveCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
