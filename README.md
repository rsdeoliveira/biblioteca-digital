# Biblioteca Digital

Aplicação web desenvolvida como parte de um projeto acadêmico de uma
Biblioteca Digital.

O sistema permite o gerenciamento de livros por meio de uma interface
web desenvolvida em Angular, integrada a uma API REST desenvolvida em
Java com Spring Boot.

## Funcionalidades

A aplicação possui as seguintes operações para livros:

- Listar livros
- Consultar livro por ID
- Cadastrar livro
- Atualizar livro
- Excluir livro

## Tecnologias utilizadas

### Frontend

- Angular 22.1.7
- TypeScript
- HTML
- CSS

### Backend

- Java 21
- Spring Boot
- Maven
- API REST

## Estrutura do projeto

O projeto é dividido em duas partes:

```text
BibliotecaDigital/
│
├── README.md
│
├── frontend/
│   └── biblioteca-digital/
│       └── Angular
│
└── backend/
    └── Java + Spring Boot
```

## Entrega NoSQL (MongoDB)

A entrega NoSQL utiliza as entidades `Livro` e `Autor` da fase 1 e
contém exemplos de consultas realizadas no MongoDB Atlas.

O arquivo [`mongo/consultas.js`](mongo/consultas.js) contém as consultas
solicitadas na atividade, incluindo `insertOne`, `insertMany`, `find`,
`updateOne`, `deleteOne` e os operadores:

- `$eq`
- `$ne`
- `$gt`
- `$gte`
- `$lt`
- `$lte`
- `$in`
- `$nin`
- `$or`
- `$and`
- `$exists`

Os operadores estão distribuídos entre as entidades `Livro` e `Autor`,
conforme permitido pelo enunciado da atividade. Algumas consultas
utilizam mais de um operador, como `$gt` e `$lt`, para representar
intervalos de valores.


### Execução

As consultas são executadas no MongoDB Atlas utilizando o MongoDB Shell
(`mongosh`).

Conecte-se ao cluster Atlas e execute o arquivo:

powershell
mongosh "mongodb+srv://cluster0.lposwj1.mongodb.net/" --apiVersion 1 --username usuariosDB ".\mongo\consultas.js"

## Simulação de Conflito e Resolução no Git

### Objetivo

Simular um conflito entre duas branches durante o desenvolvimento
e demonstrar o processo de identificação e resolução utilizando o Git.

### Branches utilizadas

- `main`
- `desenvolvedor-a`
- `desenvolvedor-b`

### Conflito

As branches `desenvolvedor-a` e `desenvolvedor-b` realizaram alterações
diferentes no mesmo trecho do arquivo `README.md`.

Ao tentar integrar a branch `desenvolvedor-b` à `main`, o Git identificou
um conflito de conteúdo.

### Resolução

O conflito foi analisado e resolvido manualmente no arquivo `README.md`.
Após a resolução, o arquivo foi adicionado ao staging e o merge foi
finalizado com um commit.

### Comandos utilizados

bash
git checkout -b desenvolvedor-a
git checkout -b desenvolvedor-b
git merge desenvolvedor-a
git merge desenvolvedor-b
git status
git add README.md
git commit -m "Resolve conflito entre desenvolvedor A e B"

### Resultado

O conflito foi resolvido com sucesso e as alterações das duas branches
foram integradas à `main`.

### Conclusão

A atividade demonstrou na prática como o Git identifica conflitos
quando diferentes branches modificam a mesma parte de um arquivo,
bem como o processo de resolução e finalização do merge.