package br.com.bibliotecadigital.repositories;

import br.com.bibliotecadigital.entities.Livro;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;

@Repository
public class LivroRepository {

    private final List<Livro> livros = new ArrayList<>();

    public List<Livro> listarTodos() {
        return livros;
    }

    public Livro buscarPorId(Long id) {
        return livros.stream()
                .filter(livro -> livro.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Livro salvar(Livro livro) {
        livros.add(livro);
        return livro;
    }

    public Livro atualizar(Livro livro) {
        Livro livroExistente = buscarPorId(livro.getId());

        if (livroExistente != null) {
            livroExistente.setTitulo(livro.getTitulo());
            livroExistente.setAutor(livro.getAutor());
            livroExistente.setAnoPublicacao(livro.getAnoPublicacao());
            livroExistente.setIsbn(livro.getIsbn());
        }

        return livroExistente;
    }

    public boolean deletar(Long id) {
        return livros.removeIf(livro -> livro.getId().equals(id));
    }
}