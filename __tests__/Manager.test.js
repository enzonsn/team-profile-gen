const Manager = require('../lib/Manager');

test('create Man object', () => {

    const manager = new Manager('Enzo Sperduti', 'enzonsperduti@gmail.com', 'JKL', '1');
    expect(manager.name).toBe('Enzo Sperduti');
    expect(manager.email).toBe('enzonsperduti@gmail.com');
    expect(manager.id).toBe('JKL');
    expect(manager.office).toBe('1');

});

test('getRole() returns role', () => {

    const manager = new Manager('Enzo Sperduti', 'enzonsperduti@gmail.com', 'JKL', '1');
    expect(manager.getRole()).toBe('Manager');

});

test('getOffice() returns office', () => {

    const manager = new Manager('Enzo Sperduti', 'enzonsperduti@gmail.com', 'JKL', '1');
    expect(manager.getGithub()).toBe('1');

});