import { getLibrary } from '../api/workWithLocalStorage';
import infoAuthor from '../halpers/infoAuthor';
// import { library } from '../object/library';

const infoSection = document.getElementById('infoSection');
const infoBooks = document.getElementById('infoBooks');
const aboutAuthor = document.getElementById('aboutAuthor');

document.getElementById('tableOfAuthor').addEventListener('click', e => {
  if (e.target.id === 'detailsBtn') {
    infoSection.removeAttribute('hidden');
    aboutAuthor.innerHTML = '';
    infoBooks.innerHTML = '';

    createInfo(e.target.parentElement.parentElement.id);
  }
});

function createInfo(infoId) {
  let library = getLibrary();

  let info = library.find(it => it.id == infoId);

  let infoAuthorInLib = new infoAuthor({
    id_author: info.id,
    author_last_name: info.author_last_name,
    author_name: info.author_name,
    author_surname: info.author_surname,
    date_of_birth: info.date_of_birth,
  });
  aboutAuthor.insertAdjacentHTML('afterbegin', infoAuthorInLib.getAuthor());
  info.books.forEach(it => {
    let books = new infoAuthor(it);
    infoBooks.insertAdjacentHTML('beforeend', books.getAuthorBook());
  });
}

export { createInfo };
