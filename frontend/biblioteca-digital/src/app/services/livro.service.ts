import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`);
  }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  atualizar(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(
      `${this.apiUrl}/${livro.id}`,
      livro
    );
  }
  deletar(id: number): Observable<string> {
    // O endpoint responde sem corpo; texto evita erro de parsing JSON no HttpClient.
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

}
