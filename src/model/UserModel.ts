import db from '../config/database';

class UserModel {
  constructor() {}
  create(
    name: string,
    email: string,
    password: string,
    callback: (error: Error) => void,
  ): void {
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(query, [name, email, password], (error) => {
      if (error) {
        callback(error);
        return;
      }
    });
  }
  update(password: string, id: number, callback: (error: Error) => void) {
    const query = `UPDATE users SET password = ? WERE id = ?`;
    db.run(query, [password, id], (error) => {
      if (error) {
        callback(error);
        return;
      }
    });
  }
}

export default new UserModel();
