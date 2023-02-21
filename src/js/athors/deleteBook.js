import { getLibrary, postLibrary } from '../api/workWithLocalStorage';
import infoAuthor from '../halpers/infoAuthor';

import { CreateObject } from './authorsRender';

const infoSection = document.getElementById('infoSection');
const infoBooks = document.getElementById('infoBooks');
const authorTable = document.getElementById('tableOfAuthor');

let library = getLibrary();

infoSection.addEventListener('click', deleteUpdateBook);

function deleteUpdateBook(event) {
  let btnId = event.target.id;
  let bookId = event.target.parentElement.id;

  if (btnId === 'removeBookBtn') {
    infoBooks.innerHTML = '';
    let author = library.find(it => it.books.find(item => item.id == bookId));

    let newBooksColection = [];
    author.books.forEach(it => {
      if (it.id != bookId) {
        newBooksColection.push(it);
      }
    });
    author.books = newBooksColection;

    postLibrary(library);

    author.books.forEach(it => {
      let books = new infoAuthor(it);
      infoBooks.insertAdjacentHTML('beforeend', books.getAuthorBook());
    });
    authorTable.innerHTML = `<tr >
            <td class="titleTable">Автори</td>
            <td class="titleTable">К-ть книг</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>`;

    CreateObject();
  }
}
