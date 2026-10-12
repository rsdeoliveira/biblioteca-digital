package br.com.bibliotecadigital.repositories;

import br.com.bibliotecadigital.entities.Autor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AutorRepository extends MongoRepository<Autor, String> {
}
