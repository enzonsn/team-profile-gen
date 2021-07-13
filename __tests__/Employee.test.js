const Employee = require('../lib/Employee');

test('create Emp object', () => {

    const employee = new Employee('Enzo Sperduti', 'enzonsperduti@gmail.com', 'ABC');
    expect(employee.name).toBe('Enzo Sperduti');
    expect(employee.email).toBe('enzonsperduti@gmail.com');
    expect(employee.id).toBe('ABC');

});

test('getEmail() returns email', () => {

    const employee = new Employee('Enzo Sperduti', 'enzonsperduti@gmail.com', 'ABC');
    expect(employee.getEmail()).toBe('enzonsperduti@gmail.com');

});

test('getName() returns name', () => {

    const employee = new Employee('Enzo Sperduti', 'enzonsperduti@gmail.com', 'ABC');
    expect(employee.getName()).toBe('Enzo Sperduti');

});

test('getRole() returns role', () => {

    const employee = new Employee('Enzo Sperduti', 'enzonsperduti@gmail.com', 'ABC');
    expect(employee.getRole()).toBe('Employee');

});

test('getId() returns id', () => {

    const employee = new Employee('Enzo Sperduti', 'enzonsperduti@gmail.com', 'ABC');
    expect(employee.getId()).toBe('ABC');

});