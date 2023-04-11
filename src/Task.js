// Функція об'єднання рядків та видалення 'z'
function combineAndRemoveZ(strings) {
  return strings.join('').replace(/z/g, '');
}

// Функція перевірки логіну та паролю
function checkLoginAndPassword(login, password) {
    const validUsers = [
      { login: 'user1', password: 'passcode1', secretPhrase: 'Secret phrase 1' },
      { login: 'user2', password: 'passcode2', secretPhrase: 'Secret phrase 2' },
      { login: 'user3', password: 'passcode3', secretPhrase: 'Secret phrase 3' },
    ];
  
    const user = validUsers.find(user => user.login === login && user.password === password);
  
    if (user) {
        return user.secretPhrase;
    } else {
        return 'Invalid login or password';
    }
}

module.exports = { combineAndRemoveZ, checkLoginAndPassword };