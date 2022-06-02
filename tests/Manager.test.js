const Manager = require('../lib/Manager');
const manager = new Manager('brad', '123', 'nagelb500@gmail.com', '5');

test('fetching employee objects', () => {
    expect(manager.name).toEqual('brad');
    expect(manager.id).toEqual('123');
    expect(manager.email).toEqual('nagelb500@gmail.com');
    expect(manager.officeNumber).toEqual('5');
});

test('getName function', () => {
    expect(manager.name).toEqual('brad');
});

test('getID function', () => {
    expect(manager.id).toEqual('123');
});

test('getEmail function', () => {
    expect(manager.email).toEqual('nagelb500@gmail.com');
});

test('getRole function', () => {
    expect(manager.getRole()).toEqual('Manager');
});