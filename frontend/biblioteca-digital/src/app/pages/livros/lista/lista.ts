import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista implements OnInit {

  livros: Livro[] = [];

  constructor(
    private livroService: LivroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.livroService.listarTodos().subscribe({
      next: (dados) => {
        console.log('Livros recebidos pelo Angular:', dados);
        console.log('Quantidade de livros:', dados.length);
        this.livros = dados;
        console.log('Livros na variável:', this.livros);
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
      }
    });
  }

  deletar(id: number): void {
    this.livroService.deletar(id).subscribe({
      next: () => {
        console.log('Livro deletado:', id);
        this.livros = this.livros.filter((livro) => livro.id !== id);
        this.router.navigate(['/livros']);
      },
      error: (erro) => {
        console.error('Erro ao deletar livro:', erro);
      }
    });
  }
}
