import searchAuthorByBookId from './searchAuthorByBookId';

export default function searchBookById(id) {
  let author = searchAuthorByBookId(id);
  let book = author.books.find(it => it.id == id);
  return book;
}
