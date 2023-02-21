const createButton = document.getElementById('createAuthor');
const modalAuthor = document.getElementById('modalAuthor');
const closrAuthorModalBtn = document.getElementById('closrAuthorModalBtn');
const nameAuthorModal = document.getElementById('nameAuthorModal');
const form = document.getElementById('authorsCreationForm');

createButton.addEventListener('click', () => {
  form.reset();
  modalAuthor.style.display = 'block';
  nameAuthorModal.textContent = 'Додати автора';
});

closrAuthorModalBtn.addEventListener('click', () => {
  modalAuthor.style.display = 'none';
  form.removeAttribute('data-id_author');
  form.reset();
});
