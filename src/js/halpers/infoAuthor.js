class infoAuthor {
  constructor(object) {
    this.id_author = object.id_author;
    this.author_name = object.author_name;
    this.author_last_name = object.author_last_name;
    this.author_surname = object.author_surname;

    this.date_of_birth = object.date_of_birth;
    this.id = object.id;
    this.name = object.name;
    this.ganre = object.ganre;
    this.number_of_pages = object.number_of_pages;
  }

  getAuthor() {
    return `
    <div id="${this.id_author}">
    <h3 class="infoSection_title">
        Автор
    </h3>
    <P>${this.author_last_name} ${this.author_name}  ${this.author_surname}</P>
    <p> Народився: ${this.date_of_birth}</p>
          <button id="createBookBtn"  class="infoSection_button" type="button">Додати книгу</button>     
    </div>`;
  }

  getAuthorBook() {
    return `<div id="${this.id}" class="infoSection_bookContainer">
             <h3>${this.name}</h3>
             <p>Жанр: ${this.ganre}</p>
             <p>К-ть сторінок: ${this.number_of_pages}</p>
             <button id="removeBookBtn"  class="infoSection_button" type="button">Видалити</button>
             <button id="changeBookBtn" class="infoSection_button" type="button">Редагувати</button>
         </div>`;
  }
}

export default infoAuthor;
