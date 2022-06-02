const Employee = require('../lib/Employee');
const employee = new Employee('brad', '123', 'nagelb500@gmail.com');

test('fetching employee objects', () => {
    expect(employee.name).toEqual('brad');
    expect(employee.id).toEqual('123');
    expect(employee.email).toEqual('nagelb500@gmail.com');
});

test('getName function', () => {
    expect(employee.name).toEqual('brad');
});

test('getID function', () => {
    expect(employee.id).toEqual('123');
});

test('getEmail function', () => {
    expect(employee.email).toEqual('nagelb500@gmail.com');
});

test('getRole function', () => {
    expect(employee.getRole()).toEqual('Employee');
});