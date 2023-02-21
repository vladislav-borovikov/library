function postGsnr(object) {
  localStorage.setItem('ganre', JSON.stringify(object));
}

function postLibrary(object) {
  localStorage.setItem('library', JSON.stringify(object));
}
function getLibrary() {
  return JSON.parse(localStorage.getItem('library'));
}

function getGanre() {
  return JSON.parse(localStorage.getItem('ganre'));
}

export { getLibrary, getGanre, postGsnr, postLibrary };
