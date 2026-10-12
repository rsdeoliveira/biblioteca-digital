package br.com.bibliotecadigital.services;

import br.com.bibliotecadigital.entities.Autor;
import br.com.bibliotecadigital.repositories.AutorRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class AutorService {

    private final AutorRepository autorRepository;

    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    public List<Autor> listarTodos() {
        return autorRepository.findAll();
    }

    public Autor buscarPorId(String id) {
        return autorRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Autor não encontrado"));
    }

    public Autor salvar(Autor autor) {
        autor.setId(null);
        return autorRepository.save(autor);
    }

    public Autor atualizar(Autor autor) {
        if (!autorRepository.existsById(autor.getId())) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Autor não encontrado");
        }
        return autorRepository.save(autor);
    }

    public void deletar(String id) {
        if (!autorRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Autor não encontrado");
        }
        autorRepository.deleteById(id);
    }
}