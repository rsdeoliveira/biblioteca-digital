package br.com.bibliotecadigital.entities;

public class Autor {

    private Long id;
    private String nome;
    private String nacionalidade;
    private Integer anoNascimento;

    public Autor() {
    }

    public Autor(Long id, String nome, String nacionalidade, Integer anoNascimento) {
        this.id = id;
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.anoNascimento = anoNascimento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public Integer getAnoNascimento() {
        return anoNascimento;
    }

    public void setAnoNascimento(Integer anoNascimento) {
        this.anoNascimento = anoNascimento;
    }
}