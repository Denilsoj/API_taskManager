import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const filePath = './src/database/myDatabase.db';

const db = new sqlite.Database(filePath, (error) => {
  if (error) {
    console.log(error.message);
    return;
  }
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    passwordSalt VARCHAR(255) NOT NULL
  )`,
    (error) => {
      if (error) {
        console.log(error.message);
        return;
      }
      console.log('Table created or existed');
    },
  );
  console.log('Connection with the database created success');
});

export default db;
