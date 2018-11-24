import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../model/categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styles: []
})
export class UpdateCategoriaComponent implements OnInit {

  categoria: Categoria;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CategoriaService) { }

  ngOnInit() {
    const categoriaId = localStorage.getItem('updateCategoriaId');

    if ( !categoriaId ) {
      alert('Acción invalida');
      this.router.navigate(['get-categoria']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });

    this.service.getCategoria(+categoriaId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateCategoria(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['get-categoria']);
        swal({
          position: 'top',
          type: 'success',
          title: `Categoría modificada con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
