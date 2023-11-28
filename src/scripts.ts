import $ from 'jquery';
import {attemptLogin} from "./loginValidator";

const nameInput:JQuery<HTMLElement> = $('.js-input-name');
const emailInput:JQuery<HTMLElement> = $('.js-input-email');
const passwordInput:JQuery<HTMLElement> = $('.js-input-password');

const clearInputFields = () => {
    nameInput.val('');
    emailInput.val('');
    passwordInput.val('');
}
const populateEvents = () => {
    $(".js-btn-login").on('click', (e) => {
        e.preventDefault();

        attemptLogin(nameInput.val().toString(),emailInput.val().toString(),passwordInput.val().toString());
        clearInputFields();
    })
}

populateEvents();