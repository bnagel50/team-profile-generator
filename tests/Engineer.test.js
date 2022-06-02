const Engineer = require('../lib/Engineer');
const engineer = new Engineer('brad', '123', 'nagelb500@gmail.com', 'github.com/bnagel50');

test('fetching employee objects', () => {
    expect(engineer.name).toEqual('brad');
    expect(engineer.id).toEqual('123');
    expect(engineer.email).toEqual('nagelb500@gmail.com');
    expect(engineer.github).toEqual('github.com/bnagel50');
});

test('getName function', () => {
    expect(engineer.name).toEqual('brad');
});

test('getID function', () => {
    expect(engineer.id).toEqual('123');
});

test('getEmail function', () => {
    expect(engineer.email).toEqual('nagelb500@gmail.com');
});

test('getGithub function', () => {
    expect(engineer.getGithub()).toEqual('github.com/bnagel50');
});

test('getRole function', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});