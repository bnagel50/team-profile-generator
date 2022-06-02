const Intern = require('../lib/Intern');
const intern = new Intern('brad', '123', 'nagelb500@gmail.com', 'OSU');

test('fetching employee objects', () => {
    expect(intern.name).toEqual('brad');
    expect(intern.id).toEqual('123');
    expect(intern.email).toEqual('nagelb500@gmail.com');
    expect(intern.school).toEqual('OSU');
});

test('getName function', () => {
    expect(intern.name).toEqual('brad');
});

test('getID function', () => {
    expect(intern.id).toEqual('123');
});

test('getEmail function', () => {
    expect(intern.email).toEqual('nagelb500@gmail.com');
});

test('getSchool function', () => {
    expect(intern.getSchool()).toEqual('OSU');
});

test('getRole function', () => {
    expect(intern.getRole()).toEqual('Intern');
});