import db from '../config/database';
import CryptPassword from '../util/CryptPassword';
import { CreateUserError } from '../types/Errors';
class UserModel {
  create(
    name: string,
    email: string,
    password: string,
    callback: (error: CreateUserError | null) => void,
  ): void {
    const query = `INSERT INTO users (name, email, passwordHash, passwordSalt) VALUES (?, ?, ?, ?)`;
    const { passwordHash, passwordSalt } = CryptPassword.hash(password);
    db.run(
      query,
      [name, email, passwordHash, passwordSalt],
      (error: CreateUserError) => {
        if (error) {
          callback(error);
          return;
        } else {
          callback(null);
        }
      },
    );
  }
  update(
    password: string,
    id: number,
    callback: (error: CreateUserError) => void,
  ) {
    const query = `UPDATE users SET password = ? WERE id = ?`;
    db.run(query, [password, id], (error: CreateUserError) => {
      if (error) {
        callback(error);
        return;
      }
    });
  }
}

export default new UserModel();
