package br.com.bibliotecadigital.services;

import br.com.bibliotecadigital.entities.Livro;
import br.com.bibliotecadigital.repositories.LivroRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class LivroService {

    private final LivroRepository livroRepository;

    public LivroService(LivroRepository livroRepository) {
        this.livroRepository = livroRepository;
    }

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Livro buscarPorId(String id) {
        return livroRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado"));
    }

    public Livro salvar(Livro livro) {
        livro.setId(null);
        return livroRepository.save(livro);
    }

    public Livro atualizar(Livro livro) {
        if (!livroRepository.existsById(livro.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado");
        }
        return livroRepository.save(livro);
    }

    public void deletar(String id) {
        if (!livroRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado");
        }
        livroRepository.deleteById(id);
    }
}