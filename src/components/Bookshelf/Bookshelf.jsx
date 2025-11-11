import { useState } from 'react';



const Bookshelf = () => {

const [books, setBooks] = useState([])

const [newBook, setNewBook] = useState({
    title: '',
    author: '', 
});
const handleInputChange = (event) => {
    setNewBook({... newBook, [event.target.name]: event.target.value});
}
const handleSubmit = (event) => {
    event.preventDefault(); 
    // ^ added only to the submit because we are wanting to stop the default refresh
    setBooks(...books, newBook)
    setNewBook({title: '', author:''})
}
    return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title: </label>
                    <input 
                    id="title"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange} 
                    />

                    <label htmlFor='author'>Author: </label>
                    <input
                    id="author"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange} 
                    />

                    <button type='submit'>Add Book:</button>
                </form>         
        </div>

            <div className="bookCardsDiv">
                <section className="bookCard" onSubmit={handleInputChange}>
                    Title: {books.name}
                    Author: {books.author}
                </section>
            </div>
    </div>
)};


export default Bookshelf;
