const express = require('express');
const bodyparser = require('body-parser');
const dbConnection = require('./db'); // Import the database connection
dbConnection(); // Use the function
const db = require('./db');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//server static files
app.use(express.static('public'));


// Home page - list books 
app.get('/home', (req, res) => {
    db.all("SELECT * FROM books",(err, rows)=> {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Database error.");
        }

        res.render('home', {books: rows });
    });
});

// Route to handle books selection by user
app.post('/select-book', (req, res) => {
    const bookId = req.body.bookId;
    const userId = req.body.userId; // you need to pass userId from session or frontend

    // Here is to implement a logic to save the selected book for the user

    res.send(`Book with ID ${bookId} selected by user ${userId}`);

});

// start the server
app.listen(4000, () => {
    console.log('server started on https://localhost:4000');
});