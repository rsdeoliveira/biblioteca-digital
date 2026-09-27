import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../../models/livro';
import { LivroService } from '../../../services/livro.service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario implements OnInit {

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.modoEdicao = true;

    this.livroService.buscarPorId(Number(id)).subscribe({
      next: (livro) => {
        this.livro = livro;
      },
      error: (erro) => {
        console.error('Erro ao buscar livro:', erro);
      }
    });
  }
}

  modoEdicao = false;

  livro: Livro = {
    id: 0,
    titulo: '',
    autor: '',
    anoPublicacao: 0,
    isbn: ''
  };

  constructor(
    private livroService: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  cadastrar(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.livroService.atualizar(this.livro).subscribe({
        next: (livro) => {
          console.log('Livro atualizado:', livro);
          this.router.navigate(['/livros']);
        },
        error: (erro) => {
          console.error('Erro ao atualizar livro:', erro);
        }
      });
    } else {
      this.livroService.salvar(this.livro).subscribe({
        next: (livro) => {
          console.log('Livro cadastrado:', livro);
          this.router.navigate(['/livros']);
        },
        error: (erro) => {
          console.error('Erro ao cadastrar livro:', erro);
        }
      });
    }
  }
}
