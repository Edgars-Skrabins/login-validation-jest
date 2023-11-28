import $ from 'jquery';

let invalidErrorMessage: JQuery<HTMLParagraphElement>;

if (process.env.NODE_ENV !== 'test') {
    invalidErrorMessage = $('.js-error');
}
const showErrorMessage = (errorMessage: string) => {
    if(!invalidErrorMessage) return;

    invalidErrorMessage.text(errorMessage);
    invalidErrorMessage.removeClass('hidden')
}

const hideErrorMessage = () => {
    if(!invalidErrorMessage) return;

    invalidErrorMessage.text('');
    invalidErrorMessage.addClass('hidden');
}

const successfulLogin = () => {
    hideErrorMessage();
    alert('You are logged in!');
}

const maxCharactersInName: number = 50;
const minCharactersInName: number = 2;
const disallowedCharactersInName: RegExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const isNameValid = (name: string): boolean => {

    if (name.length < minCharactersInName) {
        showErrorMessage('Name is too short!');
        return false;
    }

    if (name.length > maxCharactersInName) {
        showErrorMessage('Name is too long!');
        return false;
    }

    if (disallowedCharactersInName.test(name)) {
        showErrorMessage('Name has forbidden symbols!');
        return false;
    }

    return true;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const isEmailValid = (email: string): boolean => {

    if (!emailRegex.test(email)) {
        showErrorMessage('Invalid E-Mail format!');
        return false;
    }

    return true;

}

const minCharactersInPassword: number = 8;
const specialCharacters = /[!@#$%^&*]/

const isPasswordValid = (password: string): boolean => {

    if (password.length < minCharactersInPassword) {

        showErrorMessage('Password is too short!')
        return false;
    }

    if (!specialCharacters.test(password)) {
        showErrorMessage('Password is missing a symbol!')
        return false;
    }

    return true;
}

export const attemptLogin = (name: string, email: string, password: string) => {
    if (isNameValid(name) && isEmailValid(email) && isPasswordValid(password)) {
        successfulLogin();
    }
}

export {isNameValid, isEmailValid, isPasswordValid};