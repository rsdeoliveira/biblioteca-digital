import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {

  readonly anoAtual = new Date().getFullYear();
  carregando = false;
  salvando = false;
  erro: string | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.modoEdicao = true;
      this.carregando = true;

      this.livroService.buscarPorId(id).subscribe({
        next: (livro) => {
          this.livro = livro;
          this.carregando = false;
          this.changeDetector.markForCheck();
        },
        error: (erro) => {
          console.error('Erro ao buscar livro:', erro);
          this.erro = 'Não foi possível carregar os dados deste livro.';
          this.carregando = false;
          this.changeDetector.markForCheck();
        }
      });
    }
  }

  modoEdicao = false;

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    isbn: ''
  };

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  cadastrar(): void {
    if (this.salvando) {
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.erro = null;
    this.salvando = true;

    if (id) {
      this.livroService.atualizar(this.livro).subscribe({
        next: (livro) => {
          console.log('Livro atualizado:', livro);
          this.changeDetector.markForCheck();
          this.router.navigate(['/livros']);
        },
        error: (erro) => {
          console.error('Erro ao atualizar livro:', erro);
          this.erro = 'Não foi possível salvar as alterações. Tente novamente.';
          this.salvando = false;
          this.changeDetector.markForCheck();
        }
      });
    } else {
      this.livroService.salvar(this.livro).subscribe({
        next: (livro) => {
          console.log('Livro cadastrado:', livro);
          this.changeDetector.markForCheck();
          this.router.navigate(['/livros']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar livro:', erro);
          this.erro = 'Não foi possível cadastrar o livro. Tente novamente.';
          this.salvando = false;
          this.changeDetector.markForCheck();
        }
      });
    }
  }
}
