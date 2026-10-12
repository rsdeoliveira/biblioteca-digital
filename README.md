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

## Executar a API com MongoDB Atlas

No Atlas, copie a URI de conexão em **Connect → Drivers** e defina-a no
PowerShell antes de iniciar o backend. Use o nome de usuário, senha e cluster
do seu projeto:

```powershell
$env:MONGODB_URI = 'mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/biblioteca-digital?retryWrites=true&w=majority'
cd "backend\biblioteca-digital-api"
.\mvnw spring-boot:run
```

Se necessário, defina `MONGODB_DATABASE` para escolher outro banco. Autorize
o IP da máquina em **Network Access** no Atlas. A API grava livros e autores
nas coleções `livros` e `autores`; os IDs são strings MongoDB geradas
automaticamente. Não compartilhe nem versione a URI, pois ela contém
credenciais.

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

A entrega NoSQL utiliza as entidades `Livro` e `Autor` da fase 1 e contém
exemplos de consultas para execução no MongoDB Atlas.

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

Com o MongoDB Shell (`mongosh`) instalado e `MONGODB_URI` definido como acima,
execute as consultas a partir da raiz do repositório:

```powershell
mongosh $env:MONGODB_URI ".\mongo\consultas.js"
```