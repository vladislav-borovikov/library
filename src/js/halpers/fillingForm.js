const form = document.getElementById('bookCreationForm');

export default function fillingForm(object) {
  let elems = form.children;
  for (let elem of elems) {
    switch (elem.name) {
      case 'bookNameInput':
        elem.setAttribute('value', object.name);
        break;
      case 'selectGanre':
        let nameSelects = elem.children;
        for (let select of nameSelects) {
          if (select.value == object.ganre) {
            select.setAttribute('selected', 'selected');
          }
        }
        break;
      case 'numberOfPages':
        elem.setAttribute('value', object.number_of_pages);
        break;
      default:
        break;
    }
  }
}
