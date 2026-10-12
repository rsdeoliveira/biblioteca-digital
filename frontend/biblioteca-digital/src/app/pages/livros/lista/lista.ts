import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [RouterLink],
  templateUrl: './lista.html'
})
export class Lista implements OnInit {

  livros: Livro[] = [];
  termoBusca = '';
  carregando = true;
  erro: string | null = null;

  get livrosFiltrados(): Livro[] {
    const termo = this.termoBusca.trim().toLocaleLowerCase('pt-BR');

    if (!termo) {
      return this.livros;
    }

    return this.livros.filter((livro) =>
      [livro.titulo, livro.autor, livro.isbn, String(livro.anoPublicacao)]
        .some((campo) => campo.toLocaleLowerCase('pt-BR').includes(termo))
    );
  }

  atualizarBusca(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.termoBusca = event.target.value;
    }
  }

  constructor(
    private livroService: LivroService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.carregando = true;
    this.erro = null;

    this.livroService.listarTodos().subscribe({
      next: (dados) => {
        this.livros = dados;
        this.carregando = false;
        this.changeDetector.markForCheck();
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
        this.erro = 'Não foi possível carregar os livros. Tente novamente.';
        this.carregando = false;
        this.changeDetector.markForCheck();
      }
    });
  }

  deletar(id: string): void {
    this.erro = null;

    this.livroService.deletar(id).subscribe({
      next: () => {
        this.livros = this.livros.filter((livro) => livro.id !== id);
        this.changeDetector.markForCheck();
      },
      error: (erro) => {
        console.error('Erro ao deletar livro:', erro);
        this.erro = 'Não foi possível excluir este livro. Tente novamente.';
        this.changeDetector.markForCheck();
      }
    });
  }
}
