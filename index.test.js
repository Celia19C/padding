const paddingLeft = require('./index');

describe ('Padding-left App', () => {
    test('should return a word when given a word', function(){
        expect(paddingLeft('hola')).toBe('hola');
       });
});
