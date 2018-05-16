const paddingLeft = require('./paddingLeft.js');
describe('PaddingLeft', () => {
  test('Adds 1, 6, 11 or 16 spaces at the beginning of my string if we dont specify any character and the length is 5, 10, 15 or 20 respectively', () => {
    expect(paddingLeft('hola', 5)).toBe(' hola'); 
    expect(paddingLeft('hola', 10)).toBe('      hola'); 
    expect(paddingLeft('hola', 15)).toBe('           hola'); 
    expect(paddingLeft('hola', 20)).toBe('                hola'); 
  });
  test('Adds 2, 5, 8 or 11 "x" at the beginning of my string if the specified length is 6, 9, 12 or 15', () => {
    expect(paddingLeft('hola', 6, 'x')).toBe('xxhola'); 
    expect(paddingLeft('hola', 9, 'x')).toBe('xxxxxhola'); 
    expect(paddingLeft('hola', 12, 'x')).toBe('xxxxxxxxhola'); 
    expect(paddingLeft('hola', 15, 'x')).toBe('xxxxxxxxxxxhola'); 
  });
  test('Returns same string if the string length is 3, 2, 1 or 0', () => {
    expect(paddingLeft('hola', 3, 'x')).toBe('hola'); 
    expect(paddingLeft('hola', 2, 'x')).toBe('hola'); 
    expect(paddingLeft('hola', 1, 'x')).toBe('hola'); 
    expect(paddingLeft('hola', 0, 'x')).toBe('hola');
  });
});