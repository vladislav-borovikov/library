import bookFormSelectOption from '../form/bookFormSelectOption';
import fillingForm from '../halpers/fillingForm';
import searchBookById from '../halpers/searchBookById';

let modal = document.getElementById('modal');
let infoSection = document.getElementById('infoSection');
let closrModalBtn = document.getElementById('closrModalBtn');
const form = document.getElementById('bookCreationForm');

let selectGanre = document.getElementById('selectGanre');
let nameModal = document.getElementById('nameModal');

infoSection.addEventListener('click', e => {
  let button = e.target;

  switch (button.id) {
    case 'createBookBtn':
      form.setAttribute('data-id_author', button.parentElement.id);
      modal.style.display = 'block';
      nameModal.textContent = 'Додати книгу';
      break;
    case 'changeBookBtn':
      form.setAttribute('data-id_book', button.parentElement.id);
      modal.style.display = 'block';
      nameModal.textContent = 'Редагувати книгу';
      let obj = searchBookById(button.parentElement.id);
      fillingForm(obj);
      break;
    default:
      break;
  }
});

closrModalBtn.addEventListener('click', e => {
  modal.style.display = 'none';
  form.removeAttribute('data-id_book');
  form.removeAttribute('data-id_author');
});

if (selectGanre) {
  selectGanre.insertAdjacentHTML('beforeend', bookFormSelectOption());
}
