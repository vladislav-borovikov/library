import { getGanre, postGsnr } from '../api/workWithLocalStorage';

const form = document.getElementById('ganreCreateForm');
const ganreBtn = document.getElementById('ganreBtn');

let ganre = getGanre();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { ganreInput },
  } = event.currentTarget;
  let newGanr = ganreInput.value.trim();

  if (newGanr) {
    if (ganre) {
      ganre.push(newGanr);
      postGsnr(ganre);
    } else {
      postGsnr([newGanr]);
    }
    alert('Жанр додано');
    ganreBtn.style = 'display: flex';
    form.setAttribute('hidden', 'hidden');
    form.reset();
  }
}
