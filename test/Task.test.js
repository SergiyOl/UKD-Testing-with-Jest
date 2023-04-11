const { combineAndRemoveZ, checkLoginAndPassword } = require('../src/Task.js');

// Юніт-тести
// Функція 1
test('Combines and removes z from strings correctly', () => {
    // Перевірка на коректність об'єднання рядків
    expect(combineAndRemoveZ(['hello', 'world'])).toBe('helloworld');
    
    // Перевірка на коректність об'єднання порожніх рядків
    expect(combineAndRemoveZ(['', ''])).toBe('');
    
    // Перевірка на коректність об'єднання рядків з видаленням символу "z"
    expect(combineAndRemoveZ(['zero', 'one', 'two'])).toBe('eroonetwo');
});

// Функція 2
// Правильний пароль та логін
test('checkLoginAndPassword should return the correct secret phrase for valid login and password', () => {
    expect(checkLoginAndPassword('user1', 'passcode1')).toBe('Secret phrase 1');
    expect(checkLoginAndPassword('user2', 'passcode2')).toBe('Secret phrase 2');
    expect(checkLoginAndPassword('user3', 'passcode3')).toBe('Secret phrase 3');
});

// Неправильний пароль чи логін
test('checkLoginAndPassword should return "Invalid login or password" for invalid login or password', () => {
    expect(checkLoginAndPassword('user1', 'wrongpass')).toBe('Invalid login or password');
    expect(checkLoginAndPassword('wronguser', 'pass1')).toBe('Invalid login or password');
});