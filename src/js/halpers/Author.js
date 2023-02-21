class Author {
  constructor(object) {
    this.author_last_name = object.author_last_name;
    this.author_name = object.author_name;
    this.author_surname = object.author_surname;
    // this.author = object.author;
    this.books = object.books;
    this.id = object.id;
  }

  getAuthor() {
    return `<tr id="${this.id}">
            <td>${this.author_last_name} ${this.author_name} ${this.author_surname}</td>
            <td class="textInTable">${this.books.length}</td>
            <td><button id="editBtn" class="infoSection_button" type="button">Редагувати</button> </td>
            <td><button id="removeBtn" class="infoSection_button" type="button">Видалити</button></td>
            <td><button id="detailsBtn" class="infoSection_button" type="button">Деталі</button></td>
        </tr>`;
  }
}

export default Author;
