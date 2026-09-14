package br.com.bibliotecadigital.controllers;

import br.com.bibliotecadigital.entities.Autor;
import br.com.bibliotecadigital.services.AutorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/autores")
public class AutorController {

    private final AutorService autorService;

    public AutorController(AutorService autorService) {
        this.autorService = autorService;
    }

    @GetMapping
    public List<Autor> listarTodos() {
        return autorService.listarTodos();
    }

    @GetMapping("/{id}")
    public Autor buscarPorId(@PathVariable Long id) {
        return autorService.buscarPorId(id);
    }

    @PostMapping
    public Autor salvar(@RequestBody Autor autor) {
        return autorService.salvar(autor);
    }

    @PutMapping("/{id}")
    public Autor atualizar(@PathVariable Long id, @RequestBody Autor autor) {
        autor.setId(id);
        return autorService.atualizar(autor);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        autorService.deletar(id);
    }
}