import { reverseString } from './exercise.js';

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    // add more tests here
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('ab')).toBe('ba');
    expect(reverseString('abc')).toBe('cba');
    expect(reverseString('abcd')).toBe('dcba');
    
});
