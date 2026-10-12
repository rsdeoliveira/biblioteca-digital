package br.com.bibliotecadigital.controllers;

import br.com.bibliotecadigital.entities.Livro;
import br.com.bibliotecadigital.services.LivroService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
@CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:4200"})
public class LivroController {

    private final LivroService livroService;

    public LivroController(LivroService livroService) {
        this.livroService = livroService;
    }

    @GetMapping
    public List<Livro> listarTodos() {
        return livroService.listarTodos();
    }

    @GetMapping("/{id}")
    public Livro buscarPorId(@PathVariable String id) {
        return livroService.buscarPorId(id);
    }

    @PostMapping
    public Livro salvar(@RequestBody Livro livro) {
        return livroService.salvar(livro);
    }

    @PutMapping("/{id}")
    public Livro atualizar(@PathVariable String id, @RequestBody Livro livro) {
        livro.setId(id);
        return livroService.atualizar(livro);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable String id) {
        livroService.deletar(id);
    }
}