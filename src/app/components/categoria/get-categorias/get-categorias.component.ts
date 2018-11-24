import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../model/categoria';
import { CategoriaService } from '../../../services/categoria.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-get-categorias',
  templateUrl: './get-categorias.component.html',
  styles: []
})
export class GetCategoriasComponent implements OnInit {
  
  categorias: Categoria[];

  constructor(private router: Router, private service: CategoriaService) { }

  ngOnInit() {
    this.service.getCategorias().subscribe(data => (this.categorias = data));
  }

  deleteCategoria(categoria: Categoria): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar la categoria ${categoria.name}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteCategoria(categoria.id).subscribe(data => {
          this.categorias = this.categorias.filter(c => c !== categoria);
        });

        swal('Eliminada!', 'Se ha eliminado la categoria.', 'success');
      }
    });
  }

  updateCategoria(categoria: Categoria): void {
    localStorage.removeItem('updateCategoriaId');
    localStorage.setItem('updateCategoriaId', categoria.id.toString());
    this.router.navigate(['update-categoria']);
  }

  saveCategoria(): void {
    this.router.navigate(['save-categoria']);
  }

}
