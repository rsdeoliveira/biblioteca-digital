// Consultas da entrega NoSQL — Biblioteca Digital
// Execute no mongosh conectado ao banco biblioteca_digital.
// Os inserts são dados de demonstração e devem ser executados uma única vez.

use('biblioteca_digital');

// Fase 1: entidades Autor e Livro.
// InsertOne
db.autores.insertOne({
  _id: 1,
  nome: 'Machado de Assis',
  nacionalidade: 'Brasileira',
  anoNascimento: 1839
});

// InsertMany
db.autores.insertMany([
  { _id: 2, nome: 'Clarice Lispector', nacionalidade: 'Ucraniana-brasileira', anoNascimento: 1920 },
  { _id: 3, nome: 'Jorge Amado', nacionalidade: 'Brasileira', anoNascimento: 1912 },
  { _id: 4, nome: 'George Orwell', nacionalidade: 'Britânica', anoNascimento: 1903 }
]);

// InsertOne
db.livros.insertOne({
  _id: 1,
  titulo: 'Dom Casmurro',
  autorId: 1,
  autor: 'Machado de Assis',
  anoPublicacao: 1899,
  isbn: '978-85-359-0277-5',
  disponivel: true
});

// InsertMany
db.livros.insertMany([
  { _id: 2, titulo: 'A Hora da Estrela', autorId: 2, autor: 'Clarice Lispector', anoPublicacao: 1977, isbn: '978-85-359-0280-5', disponivel: true },
  { _id: 3, titulo: 'Capitães da Areia', autorId: 3, autor: 'Jorge Amado', anoPublicacao: 1937, isbn: '978-85-359-0278-2', disponivel: false },
  { _id: 4, titulo: '1984', autorId: 4, autor: 'George Orwell', anoPublicacao: 1949, isbn: '978-85-359-0279-9', disponivel: true },
  { _id: 5, titulo: 'Memórias Póstumas de Brás Cubas', autorId: 1, autor: 'Machado de Assis', anoPublicacao: 1881, disponivel: false }
]);

// find(): lista todos os documentos da coleção.
db.livros.find();

// find({atributo: "valor"}): igualdade direta.
db.livros.find({ autor: 'Machado de Assis' });

// $eq: ano de publicação igual a 1949.
db.livros.find({ anoPublicacao: { $eq: 1949 } });

// $ne: livros publicados em ano diferente de 1949.
db.livros.find({ anoPublicacao: { $ne: 1949 } });

// $gt e $lt: intervalo aberto (publicados depois de 1900 e antes de 2000).
db.livros.find({ anoPublicacao: { $gt: 1900, $lt: 2000 } });

// $gte e $lte: intervalo incluindo os extremos.
db.livros.find({ anoPublicacao: { $gte: 1937, $lte: 1977 } });

// $in: ano igual a um dos valores da lista.
db.livros.find({ anoPublicacao: { $in: [1881, 1899, 1949] } });

// $nin: autor não está entre os nomes informados.
db.livros.find({ autor: { $nin: ['Machado de Assis', 'Jorge Amado'] } });

// $or: ao menos uma das condições deve ser verdadeira.
db.livros.find({ $or: [{ disponivel: true }, { anoPublicacao: { $lt: 1900 } }] });

// $and: todas as condições devem ser verdadeiras.
db.livros.find({ $and: [{ disponivel: true }, { anoPublicacao: { $gte: 1900 } }] });

// $exists: encontra livros que possuem o campo isbn.
db.livros.find({ isbn: { $exists: true } });

// updateOne: altera somente o primeiro documento que corresponde ao filtro.
db.livros.updateOne(
  { _id: 3 },
  { $set: { disponivel: true } }
);

// deleteOne: exclui somente o documento que corresponde ao filtro.
// O documento de demonstração _id: 5 é removido ao executar esta instrução.
db.livros.deleteOne({ _id: 5 });
