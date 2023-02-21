import { getLibrary } from '../api/workWithLocalStorage';
import Author from '../halpers/Author';

const authorTable = document.getElementById('tableOfAuthor');

function CreateObject() {
  let library = getLibrary();
  authorTable.innerHTML = `<tr >
            <td class="titleTable">Автори</td>
            <td class="titleTable">К-ть книг</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>`;
  if (library) {
    library.forEach(it => {
      let authorItem = new Author({
        author_last_name: it.author_last_name,
        author_name: it.author_name,
        author_surname: it.author_surname,
        books: it.books,
        id: it.id,
      });
      authorTable.insertAdjacentHTML('beforeend', authorItem.getAuthor());
    });
  }
}

CreateObject();

export { CreateObject };
