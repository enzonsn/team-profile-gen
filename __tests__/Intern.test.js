const Intern = require('../lib/Intern');

test('create Int object', () => {

    const intern = new Intern('Enzo Sperduti', 'enzonsperduti@gmail.com', 'GHI', 'UTD');
    expect(intern.name).toBe('Enzo Sperduti');
    expect(intern.email).toBe('enzonsperduti@gmail.com');
    expect(intern.id).toBe('DEF');
    expect(intern.school).toBe('UTD');

});

test('getRole() returns role', () => {

    const intern = new Intern('Enzo Sperduti', 'enzonsperduti@gmail.com', 'GHI', 'UTD');
    expect(intern.getRole()).toBe('Intern');

});

test('getSchool() returns school', () => {

    const intern = new Intern('Enzo Sperduti', 'enzonsperduti@gmail.com', 'GHI', 'UTD');
    expect(intern.getSchool()).toBe('UTD');

});