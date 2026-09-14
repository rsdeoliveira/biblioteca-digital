package br.com.bibliotecadigital.services;

import br.com.bibliotecadigital.entities.Livro;
import br.com.bibliotecadigital.repositories.LivroRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LivroService {

    private final LivroRepository livroRepository = new LivroRepository();

    public List<Livro> listarTodos() {
        return livroRepository.listarTodos();
    }

    public Livro buscarPorId(Long id) {
        return livroRepository.buscarPorId(id);
    }

    public Livro salvar(Livro livro) {
        return livroRepository.salvar(livro);
    }

    public Livro atualizar(Livro livro) {
        return livroRepository.atualizar(livro);
    }

    public boolean deletar(Long id) {
        return livroRepository.deletar(id);
    }
}