import { getGanre } from '../api/workWithLocalStorage';

let ganre = getGanre();

function bookFormSelectOption() {
  if (ganre) {
    let option = ganre.map(it => `<option value="${it}">${it}</option>`);
    return option;
  }
}

export default bookFormSelectOption;
