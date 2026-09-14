package br.com.bibliotecadigital.services;

import br.com.bibliotecadigital.entities.Autor;
import br.com.bibliotecadigital.repositories.AutorRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutorService {

    private final AutorRepository autorRepository;

    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    public List<Autor> listarTodos() {
        return autorRepository.listarTodos();
    }

    public Autor buscarPorId(Long id) {
        return autorRepository.buscarPorId(id);
    }

    public Autor salvar(Autor autor) {
        return autorRepository.salvar(autor);
    }

    public Autor atualizar(Autor autor) {
        return autorRepository.atualizar(autor);
    }

    public boolean deletar(Long id) {
        return autorRepository.deletar(id);
    }
}