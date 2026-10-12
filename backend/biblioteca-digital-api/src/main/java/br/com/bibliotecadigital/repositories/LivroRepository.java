package br.com.bibliotecadigital.repositories;

import br.com.bibliotecadigital.entities.Livro;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LivroRepository extends MongoRepository<Livro, String> {
}