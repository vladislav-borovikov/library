import { getLibrary, postLibrary } from '../api/workWithLocalStorage';
import { CreateObject } from './authorsRender';

const tableOfAuthor = document.getElementById('tableOfAuthor');
const aboutAuthor = document.getElementById('aboutAuthor');
const infoBooks = document.getElementById('infoBooks');

tableOfAuthor.addEventListener('click', deleteAuthor);

function deleteAuthor(event) {
  let library = getLibrary();

  if (event.target.id === 'removeBtn') {
    let deleteAuthorId = event.target.parentElement.parentElement.id;

    let deleteAuthor = library.find(it => it.id == deleteAuthorId);
    let deleteAuthorIndex = library.indexOf(deleteAuthor);
    library.splice(deleteAuthorIndex, 1);
    postLibrary(library);
    tableOfAuthor.innerHTML = `<tr >
            <td class="titleTable">Автори</td>
            <td class="titleTable">К-ть книг</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>`;
    if (aboutAuthor.children[0].id === deleteAuthorId) {
      aboutAuthor.innerHTML = '';
      infoBooks.innerHTML = '';
    }
    CreateObject();
  }
}
