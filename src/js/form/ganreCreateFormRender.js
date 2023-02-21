const ganreBtn = document.getElementById('ganreBtn');
const ganreCreateForm = document.getElementById('ganreCreateForm');

ganreBtn.addEventListener('click', () => {
  // ganreBtn.setAttribute('hidden');
  ganreBtn.style = 'display: none';
  ganreCreateForm.removeAttribute('hidden');
});
