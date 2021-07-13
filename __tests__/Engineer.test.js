const Engineer = require('../lib/Engineer');

test('create Eng object', () => {

    const engineer = new Engineer('Enzo Sperduti', 'enzonsperduti@gmail.com', 'DEF');
    expect(engineer.name).toBe('Enzo Sperduti');
    expect(engineer.email).toBe('enzonsperduti@gmail.com');
    expect(engineer.id).toBe('DEF');
    expect(engineer.github).toBe('enzonsn');

});

test('getRole() returns role', () => {

    const engineer = new Engineer('Enzo Sperduti', 'enzonsperduti@gmail.com', 'DEF');
    expect(engineer.getRole()).toBe('Engineer');

});

test('getGithub() returns github', () => {

    const engineer = new Engineer('Enzo Sperduti', 'enzonsperduti@gmail.com', 'DEF', 'enzonsn');
    expect(engineer.getGithub()).toBe('enzonsn');

});