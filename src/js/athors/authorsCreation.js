import { nanoid } from 'nanoid';
import Author from '../halpers/Author';
import { getLibrary, postLibrary } from '../api/workWithLocalStorage';

const form = document.getElementById('authorsCreationForm');
const authorTable = document.getElementById('tableOfAuthor');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const authorId = form.dataset.id_author;

  if (!authorId) {
    const {
      elements: {
        formLastNameInput,
        formNameInput,
        formSurnameInput,
        formDateOfBirthInput,
      },
    } = event.currentTarget;

    let newAuthor = {
      id: nanoid(5),
      author_last_name: formLastNameInput.value,
      author_name: formNameInput.value,
      author_surname: formSurnameInput.value,
      // author: `${formLastNameInput.value} ${formNameInput.value} ${formSurnameInput.value}`,
      date_of_birth: formDateOfBirthInput.value,
      books: [],
    };

    let library = getLibrary();

    if (library) {
      library.push(newAuthor);
      postLibrary(library);
    } else {
      let newArrey = [];
      newArrey.push(newAuthor);
      postLibrary(newArrey);
    }

    let authorItem = new Author(newAuthor);
    authorTable.insertAdjacentHTML('beforeend', authorItem.getAuthor());

    form.reset();
  }
}
