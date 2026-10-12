package br.com.bibliotecadigital.controllers;

import br.com.bibliotecadigital.entities.Autor;
import br.com.bibliotecadigital.services.AutorService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/autores")
@CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:4200"})
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
    public Autor buscarPorId(@PathVariable String id) {
        return autorService.buscarPorId(id);
    }

    @PostMapping
    public Autor salvar(@RequestBody Autor autor) {
        return autorService.salvar(autor);
    }

    @PutMapping("/{id}")
    public Autor atualizar(@PathVariable String id, @RequestBody Autor autor) {
        autor.setId(id);
        return autorService.atualizar(autor);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable String id) {
        autorService.deletar(id);
    }
}