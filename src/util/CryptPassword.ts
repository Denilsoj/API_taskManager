import { randomBytes, pbkdf2Sync } from 'crypto';

type PasswordCryptData = {
  passwordSalt: string;
  passwordHash: string;
};
class CryptPassword {
  hash(password: string): PasswordCryptData {
    const passwordSalt = randomBytes(16).toString('hex');

    const passwordHash = pbkdf2Sync(
      password,
      passwordSalt,
      100000,
      64,
      'sha512',
    ).toString('hex');

    return { passwordSalt, passwordHash };
  }
  compare(hash: string, oldSalt: string, password: string): boolean {
    const hashPasswordCompare = pbkdf2Sync(
      password,
      oldSalt,
      100000,
      64,
      'sha512',
    ).toString('hex');
    return hash === hashPasswordCompare;
  }
}

export default new CryptPassword();
