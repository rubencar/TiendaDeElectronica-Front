import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../model/categoria';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8080/tiendadeelectronica/categoria';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { 
    console.log('Servicio Customer Funcionando');
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data as Categoria[])
    );
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  saveCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl, categoria, {headers: this.httpHeaders});
  }

  updateCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.baseUrl, categoria, {headers: this.httpHeaders});
  }

  deleteCategoria(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
  }
}
