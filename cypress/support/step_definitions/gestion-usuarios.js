const {
    Given,
    When,
    Then,

    
} = require("@badeball/cypress-cucumber-preprocessor")
const { registerUserPage } = require("../../e2e/page/RegisterUserPage")

    Given('que estoy en el sito web de registro', ()=>{
        
        cy.visit("https://cadastro-de-usuarios.s3.us-east-1.amazonaws.com/index.html", {failOnStatusCode: false})
    })

    When('realizo el registro de un nuevo usuario', (datatable)=>{

        registerUserPage.registrationUserSucessfull(datatable)

    })

    Then('valido que el registro fue exitoso', (datatable)=>{
        registerUserPage.validateRegister(datatable)
    })

    ///
    When('luego lo elimino de los registros', ()=>{
        registerUserPage.deleteUser()
    })

    Then('valido que el usuario se elimino correctamenta', (datatable)=>{
        registerUserPage.validateDeleateUser(datatable)
    })


    When('intento registrar un usuario con los campos vacios', ()=>{
        registerUserPage.registrationUserFieldsEmpty()
    })

    Then('valido los mensajes de error de cada campo', ()=>{
        registerUserPage.validateFieldsEmpty()
    })


    When('ingreso los datos y el primer nombre', (datatable)=>{
        registerUserPage.registrationUserIncompleteName(datatable)
    })

    When('intento realizar el registro', ()=>{
        registerUserPage.clickButtonRegister()
    })

    Then('valido el mensaje de error del nombre incomleto', (datatable)=>{
        registerUserPage.validateIncompleteName(datatable)
    })

    When('ingreso un email invalido', (datatable)=>{
        registerUserPage.registrationUserEmailInvalid(datatable)
    })

    Then('valido el mensaje de email invalido', (datatable)=>{
        registerUserPage.validateEmailInvalid(datatable)
    })

    When('ingreso una contraseña invalida', (datatable)=>{
        registerUserPage.registrationUserPasswordInvalid(datatable)
    })

    Then('valido el mensaje de la contraseña invalida', (datatable)=>{
        registerUserPage.validatePasswordInvalid(datatable)
    })