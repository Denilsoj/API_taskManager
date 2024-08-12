import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const filePath = './myDatabase.db';

const db = new sqlite.Database(filePath, (error) => {
  if (error) {
    console.log(error.message);
  }
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )`,
    (error) => {
      if (error) {
        console.log(error.message);
      }
      console.log('Table created or existed');
    },
  );
  console.log('Connection with the database created success');
});

export default db;
