import { getLibrary } from '../api/workWithLocalStorage';

let form = document.getElementById('searchingBooks');
let modalSearch = document.getElementById('modalSearch');
let closrSearchModalBtn = document.getElementById('closrSearchModalBtn');
let tableSearch = document.getElementById('tableSearch');

let library = getLibrary();

closrSearchModalBtn.addEventListener('click', () => {
  modalSearch.style.display = 'none';
  tableSearch.innerHTML = '';
});

form.addEventListener('submit', handlSubmit);

function handlSubmit(event) {
  event.preventDefault();
  const {
    elements: { search },
  } = event.currentTarget;

  let searchRequest = search.value.trim().toLowerCase();
  if (searchRequest || library) {
    let searchAnswers = [];

    library.forEach(it =>
      it.books.forEach(item => {
        if (item.name.toLowerCase().includes(searchRequest)) {
          let book = {
            id: item.id,
            name: item.name,
            number_of_pages: item.number_of_pages,
            ganre: item.ganre,
            author: `${it.author_last_name} ${it.author_name} ${it.author_surname} `,
          };
          searchAnswers.push(book);
        }
      })
    );

    modalSearch.style.display = 'block';
    if (searchAnswers.length) {
      tableSearch.innerHTML = `<tr>
            <td>Назва</td>
            <td>Жанр</td>
            <td>К-ть сторінок</td>
            <td>Автор</td>
            </tr>`;

      searchAnswers.forEach(it =>
        tableSearch.insertAdjacentHTML(
          'beforeend',
          `<tr id="${it.id}">
            <td>${it.name}</td>
            <td>${it.ganre}</td>
            <td>${it.number_of_pages} </td>
            <td>${it.author}</td>
          </tr>`
        )
      );
    } else {
      tableSearch.innerHTML = '<p>Нічого не знайдено </>';
    }
  }
}
