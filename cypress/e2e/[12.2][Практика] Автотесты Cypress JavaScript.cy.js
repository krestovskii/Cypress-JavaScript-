describe('Автотесты для формы логина и пароля на [login.qa.studio]', function () {

    it('1 Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); // входим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввел правильный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввел правильный пароль
        cy.get('#loginButton').click(); //нажал унпут Войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверил нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик, т.е. он есть
    })

    it('2 Проверка логики восстановления пароля', function () {
            cy.visit('https://login.qa.studio'); // входим на сайт
            cy.get('#forgotEmailButton').click(); //Нажать «Забыли пароль»
            cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести любой имейл
            cy.get('#restoreEmailButton').click(); //нажал унпут Отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //получил нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик, т.е. он есть
        })

    it('3 Негативный кейс авторизации - НЕправильный пароль', function () {
            cy.visit('https://login.qa.studio'); // входим на сайт
            cy.get('#mail').type('german@dolnikov.ru'); //ввел правильный логин
            cy.get('#pass').type('iLoveqastudio2'); //ввел неправильный пароль
            cy.get('#loginButton').click(); //нажал унпут Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверил нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик, т.е. он есть
        })

    it('4 Негативный кейс авторизации - НЕправильный логин', function () {
            cy.visit('https://login.qa.studio'); // входим на сайт
            cy.get('#mail').type('ivanov@dolnikov.ru'); //ввел неправильный логин
            cy.get('#pass').type('iLoveqastudio1'); //ввел правильный пароль
            cy.get('#loginButton').click(); //нажал унпут Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверил нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик, т.е. он есть
        })

    it('5  Негативный кейс валидации - без @', function () {
            cy.visit('https://login.qa.studio'); // входим на сайт
            cy.get('#mail').type('germandolnikov.ru'); //ввел логин без @
            cy.get('#pass').type('iLoveqastudio1'); //ввел правильный пароль
            cy.get('#loginButton').click(); //нажал унпут Войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверил нужный текст
         })

    it('6 Проверка на приведение к строчным буквам в логине - GerMan@Dolnikov.ru', function () {
            cy.visit('https://login.qa.studio'); // входим на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввел правильный логин, но с большими буквами
            cy.get('#pass').type('iLoveqastudio1'); //ввел правильный пароль
            cy.get('#loginButton').click(); //нажал унпут Войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверил нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик, т.е. он есть
        })

describe('Один длинный автотест для [Покемонов]', function () {

    it('Покупку нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // входим на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //ввел правильный логин
        cy.get('#password').type('USER_PASSWORD'); //ввел правильный пароль
        cy.get('.auth__button').click(); //нажал унпут Войти
        cy.wait(1000);
        cy.get('.header__container > .header__id').click({ force: true }); //нажал унпут Войти в профиль тренера
        cy.get('[href="/shop"]').click({ force: true }); //нажал унпут Войти в Смена аватара
        cy.get(':nth-child(1) > .shop__button').click({ force: true }); //нажал унпут Купить с переходом к заполнению кред карты
        cy.get('.credit').type('4620869113632996'); // записываем № кред карты
        cy.get('.k_input_ccv').type('125'); // срок действия КК
        cy.get('.k_input_date').type('1225'); //код с КК
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); //имя с КК
        cy.get('.pay-btn').click({ force: true }); //нажал унпут Оплатить
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click({ force: true });  // нажал унпут Отправить
        cy.get('.payment__padding').should('be.visible'); //текст виден пользователю
        })
    })
})