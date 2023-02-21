const form = document.getElementById('authorsCreationForm');

export default function fillingForm({
  author_last_name,
  author_name,
  author_surname,
  date_of_birth,
}) {
  // let authorInBase = object.author.split(' ');
  // let authorFullName = {
  //   lastName: authorInBase[0],
  //   name: authorInBase[1],
  //   surname: authorInBase[2] || '',
  // };

  // ${this.author_last_name} ${this.author_name} ${this.author_surname}

  let elems = form.children;
  for (let elem of elems) {
    switch (elem.name) {
      case 'formLastNameInput':
        elem.setAttribute('value', author_last_name);
        break;
      case 'formNameInput':
        elem.setAttribute('value', author_name);

        break;
      case 'formSurnameInput':
        elem.setAttribute('value', author_surname);
        break;
      case 'formDateOfBirthInput':
        elem.setAttribute('value', date_of_birth);
        break;
      default:
        break;
    }
  }
}
