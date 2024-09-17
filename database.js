const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/database.db');

db.serialize(() => {
    //creating users table 
    db.run(`CREATE TABLE users(
        id INTERGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT
        )`);

    // creating books table 
    db.run(`CREATE TABLE books (
        id INTERGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        description TEXT
        )`);
     
    // Inserting sample of books 
    const stmt = db.prepare("INSERT INTO books (title, author, description) values (?, ?, ?)");
    stmt.run("");
    stmt.run("");
    stmt.run("");
    stmt.finalize();    
});

module.exports = db;
