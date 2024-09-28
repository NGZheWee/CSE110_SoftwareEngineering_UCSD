// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(858) 625-1251 can be recognized as a valid phone number', () => {
    expect(functions.isPhoneNumber('(858) 625-1251')).toBe(true);
});

test('858-625-1251 can be recognized as a valid phone number', () => {
    expect(functions.isPhoneNumber('858-625-1251')).toBe(true);
});

test('8586251251 can not be recognized as a valid phone number', () => {
    expect(functions.isPhoneNumber('8586251251')).toBe(false);
});

test('zng@ucsd.edu can not be recognized as a valid phone number', () => {
    expect(functions.isPhoneNumber('zng@ucsd.edu')).toBe(false);
});

test('zng@ucsd.edu can be recognized as a valid email address', () => {
    expect(functions.isEmail('zng@ucsd.edu')).toBe(true);
});

test('ngzhewee@hotmail.com can be recognized as a valid email address', () => {
    expect(functions.isEmail('ngzhewee@hotmail.com')).toBe(true);
});

test('www.google.com can not be recognized as a valid email address', () => {
    expect(functions.isEmail('www.google.com')).toBe(false);
});

test('(858) 625-1251 can not be recognized as a valid email address', () => {
    expect(functions.isEmail('(858) 625-1251')).toBe(false);
});

test('Password can be recognized as a valid strong password', () => {
    expect(functions.isStrongPassword('Password')).toBe(true);
});

test('Password69 can be recognized as a valid strong password', () => {
    expect(functions.isStrongPassword('Password69')).toBe(true);
});

test('69Password can not be recognized as a valid strong password', () => {
    expect(functions.isStrongPassword('69Password')).toBe(false);
});

test('_Password can not be recognized as a valid strong password', () => {
    expect(functions.isStrongPassword('_Password')).toBe(false);
});

test('10/24/2002 can be recognized as a valid date', () => {
    expect(functions.isDate('10/24/2002')).toBe(true);
});

test('24/10/2002 can be recognized as a valid date', () => {
    expect(functions.isDate('24/10/2002')).toBe(true);
});

test('2002/10/24 can not be recognized as a valid date', () => {
    expect(functions.isDate('2002/10/24')).toBe(false);
});

test('2002/24/10 can not be recognized as a valid date', () => {
    expect(functions.isDate('2002/24/10')).toBe(false);
});

test('#069 can be recognized as a valid Hex Color', () => {
    expect(functions.isHexColor('#069')).toBe(true);
});

test('#069069 can be recognized as a valid Hex Color', () => {
    expect(functions.isHexColor('#069069')).toBe(true);
});

test('#69 can not be recognized as a valid Hex Color', () => {
    expect(functions.isHexColor('#69')).toBe(false);
});

test('yellow can not be recognized as a valid Hex Color', () => {
    expect(functions.isHexColor('yellow')).toBe(false);
});