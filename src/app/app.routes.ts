import { Routes } from '@angular/router';
import { DeleteCategoriaComponent } from './components/categoria/delete-categoria/delete-categoria.component';
import { SaveCategoriaComponent } from './components/categoria/save-categoria/save-categoria.component';
import { UpdateCategoriaComponent } from './components/categoria/update-categoria/update-categoria.component';

export const ROUTES: Routes = [
    { path: 'delete-categoria', component: DeleteCategoriaComponent },
    { path: 'save-categoria', component: SaveCategoriaComponent },
    { path: 'update-categoria', component: UpdateCategoriaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'get-categorias' },
    { path: '**', pathMatch: 'full', redirectTo: 'get-categorias' }
];