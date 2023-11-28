import { isNameValid, isEmailValid, isPasswordValid } from './loginValidator'
import $ from 'jquery'

jest.mock('jquery');

describe('Login Validator', () => {
    describe('Name Validation', () => {
        it('Should know when a name is too short', () => {
            const result = isNameValid('b');
            expect(result).toEqual(false);
        });

        it('Should know when a name is too long', () => {
            const result = isNameValid('qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop');
            expect(result).toEqual(false);
        });

        it('Should know when a name has disallowed symbols', () => {
            const result = isNameValid('JimmyJammy64$');
            expect(result).toEqual(false);
        });

        it('Should know when a name is valid', () => {
            const result = isNameValid('Jānis Seržants');
            expect(result).toEqual(true);
        });
    });

    describe('Email Validation', () => {
        it('Should know when an email is invalid', () => {
            const result = isEmailValid('@wrongemail.dum');
            expect(result).toEqual(false);
        });

        it('Should know when an email is valid', () => {
            const result = isEmailValid('myEmail@dmail.com');
            expect(result).toEqual(true);
        });
    });

    describe('Password Validation', () => {
        it('Should know when a password is too short', () => {
            const result = isPasswordValid('boom#');
            expect(result).toEqual(false);
        });

        it('Should know when a password does not have symbols', () => {
            const result = isPasswordValid('myPasswordIs');
            expect(result).toEqual(false);
        });

        it('Should know when a password is valid', () => {
            const result = isPasswordValid('coolPassword24%');
            expect(result).toEqual(true);
        });
    });
});
