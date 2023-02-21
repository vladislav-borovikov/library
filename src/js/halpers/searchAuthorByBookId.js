import { getLibrary } from '../api/workWithLocalStorage';

let library = getLibrary();

export default function searchAuthorByBookId(id) {
  let author = library.find(it => it.books.find(item => item.id == id));
  return author;
}
