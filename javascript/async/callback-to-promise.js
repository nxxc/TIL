// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id == 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(id) {
    return new Promise((resolve, rejcet) => {
      setTimeout(() => {
        if (id === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          rejcet(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => console.log(`Hello ${user.name}${user.role}`))
  .catch(console.log);