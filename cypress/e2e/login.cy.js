describe('Проверка авторизации', function () {

       it('Верный логин и верный пароль', function () {
         cy.visit('http://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
         
         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); //нажал войти

         cy.wait(5000); // позволяет организовать перерыв ожидания ответа 5 сек
         
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
     })
       it('Верный логин и неверный пароль', function () {
        cy.visit('http://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
        
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
    })
       it('Проверка,что в логине есть @', function () {
        cy.visit('http://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
        
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('iLoveqastudio7'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
    })
       it('Проверка восстановления пароля', function () {
        cy.visit('http://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст. пароль
        
        cy.get('#forgotEmailButton').click(); //нажимаю кнопку восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru') //ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); //нажимаю отправить код

        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю на совпадение текста
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю
    })
  })
 
// План
//+ Найти поле логин и ввести верный логин
//+ Найти поле пароль и ввести правильный пароль
//+ Найти кнопку войти и нажать на неё
//Проверить, что авторизация прошла успешно 