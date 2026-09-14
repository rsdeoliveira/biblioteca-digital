package br.com.bibliotecadigital.repositories;

import br.com.bibliotecadigital.entities.Autor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AutorRepository {

    private final List<Autor> autores = new ArrayList<>();

    public List<Autor> listarTodos() {
        return autores;
    }

    public Autor buscarPorId(Long id) {
        return autores.stream()
                .filter(autor -> autor.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public Autor salvar(Autor autor) {
        autor.setId((long) (autores.size() + 1));
        autores.add(autor);
        return autor;
    }

    public Autor atualizar(Autor autor) {
        for (int i = 0; i < autores.size(); i++) {
            if (autores.get(i).getId().equals(autor.getId())) {
                autores.set(i, autor);
                return autor;
            }
        }

        return null;
    }

    public boolean deletar(Long id) {
        return autores.removeIf(autor -> autor.getId().equals(id));
    }
}