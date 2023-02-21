import { getLibrary, postLibrary } from '../api/workWithLocalStorage';
import fillingForm from '../halpers/fillingFormAuthor';
import infoAuthor from '../halpers/infoAuthor';
import { CreateObject } from './authorsRender';

const tableOfAuthor = document.getElementById('tableOfAuthor');
const form = document.getElementById('authorsCreationForm');
const nameAuthorModal = document.getElementById('nameAuthorModal');
const authorTable = document.getElementById('tableOfAuthor');
const aboutAuthor = document.getElementById('aboutAuthor');

tableOfAuthor.addEventListener('click', authorUpdate);
form.addEventListener('submit', handleSubmit);

let library = getLibrary();

function authorUpdate(event) {
  if (event.target.id === 'editBtn') {
    modalAuthor.style.display = 'block';
    nameAuthorModal.textContent = 'Редагувати автора';
    let editAuthorId = event.target.parentElement.parentElement.id;
    form.setAttribute('data-id_author', editAuthorId);
    const author = library.find(it => it.id == editAuthorId);
    fillingForm(author);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const authorId = form.dataset.id_author;

  if (authorId) {
    const author = library.find(it => it.id == authorId);
    const {
      elements: {
        formLastNameInput,
        formNameInput,
        formSurnameInput,
        formDateOfBirthInput,
      },
    } = event.currentTarget;

    author.author_last_name = formLastNameInput.value;
    author.author_name = formNameInput.value;
    author.author_surname = formSurnameInput.value;
    author.date_of_birth = formDateOfBirthInput.value;

    postLibrary(library);

    authorTable.innerHTML = '';
    form.reset();
    modalAuthor.style.display = 'none';
    form.removeAttribute('data-id_author');
    form.reset();
    alert('Автор був змінений');

    let updateAuthor = new infoAuthor(author);
    aboutAuthor.innerHTML = '';
    aboutAuthor.insertAdjacentHTML('afterbegin', updateAuthor.getAuthor());
    CreateObject();
  }
}
