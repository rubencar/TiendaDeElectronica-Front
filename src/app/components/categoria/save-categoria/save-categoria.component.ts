import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../services/categoria.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-save-categoria',
  templateUrl: './save-categoria.component.html',
  styles: []
})
export class SaveCategoriaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CategoriaService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.saveCategoria( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['get-categoria']);
        swal({
          position: 'top',
          type: 'success',
          title: `Categoria creada con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
