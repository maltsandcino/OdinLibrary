//Library Array which holds book objects
const myLibrary = [];

//Constructor for Book Object
function Book(title, author, genre, read, description){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
    this.description = description;
}

function displayBooks(library){
    for (let book of library){
        console.log(book.title);
    }
}
//Handling SPA Features (Displaying and Undisplaying Pages)
////Here we get the links AND the pages and assign them to veriables
let addLink = document.getElementById("add");
let searchLink = document.getElementById("search");
let listLink = document.getElementById("list");

let addPage = document.getElementById("bookAdd");
let genrePage = document.getElementById("genrePage");
let listPage = document.getElementById("listPage");

//Handling link clicks by adding a class that adds display: none or toggles it off. Only one page is viewable at a time.

addLink.addEventListener('click', () => {
    genrePage.classList.add('invisible');
    listPage.classList.add('invisible');
    addPage.classList.toggle('invisible');
})

searchLink.addEventListener('click', () => {
    addPage.classList.add('invisible');
    listPage.classList.add('invisible');
    genrePage.classList.toggle('invisible');
})

listLink.addEventListener('click', () => {
    genrePage.classList.add('invisible');
    addPage.classList.add('invisible');
    listPage.classList.toggle('invisible');
})

//Handling Form Submission of Books and Reset
let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', submitBook);

// let resetButton = document.getElementById("reset");
// resetButton.addEventListener('click', resetForm);

function resetForm(event){
    event.preventDefault();
    document.forms.form.reset()
}

function submitBook(event){
    event.preventDefault();
    var formEl = document.forms.form;
    var formData = new FormData(formEl);
    var title = formData.get('title')
    var author = formData.get('author')
    var genre = formData.get('genre')
    var read = formData.get('readunread')
    var description = formData.get('description')
    let new_book = new Book(title, author, genre, read, description)
    document.getElementById("form").reset()
    console.log(myLibrary)
    myLibrary.push(new_book)
    console.log(myLibrary)



    event.preventDefault();
}
