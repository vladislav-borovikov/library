import { nanoid } from 'nanoid';
import infoAuthor from '../halpers/infoAuthor';
import searchAuthorByBookId from '../halpers/searchAuthorByBookId';
import searchBookById from '../halpers/searchBookById';
import fillingForm from '../halpers/fillingForm';
import { CreateObject } from './authorsRender';
import { getLibrary, postLibrary } from '../api/workWithLocalStorage';

const form = document.getElementById('bookCreationForm');
const infoBooks = document.getElementById('infoBooks');

let library = getLibrary();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const authorId = form.dataset.id_author;
  const bookId = form.dataset.id_book;

  if (authorId) {
    const {
      elements: { bookNameInput, selectGanre, numberOfPages },
    } = event.currentTarget;

    let newBook = {
      id: nanoid(5),
      ganre: selectGanre.value,
      name: bookNameInput.value,
      number_of_pages: numberOfPages.value,
    };

    let libUpdateItem = library.find(it => it.id === authorId);
    if (libUpdateItem) {
      libUpdateItem.books.push(newBook);

      postLibrary(library);

      let book = new infoAuthor(newBook);
      infoBooks.insertAdjacentHTML('beforeend', book.getAuthorBook());

      CreateObject();
      form.reset();
    }
  }

  if (bookId) {
    let author = searchAuthorByBookId(bookId);
    let book = searchBookById(bookId);
    const {
      elements: { bookNameInput, selectGanre, numberOfPages },
    } = event.currentTarget;
    let indexBook = author.books.indexOf(book);

    let updateBook = {
      id: bookId,
      ganre: selectGanre.value,
      name: bookNameInput.value,
      number_of_pages: numberOfPages.value,
    };

    author.books.splice(indexBook, 1, updateBook);

    infoBooks.innerHTML = '';
    author.books.forEach(it => {
      let books = new infoAuthor(it);
      infoBooks.insertAdjacentHTML('beforeend', books.getAuthorBook());
    });
    fillingForm(updateBook);
    form.reset();
  }
}
