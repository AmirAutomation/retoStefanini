export class RegisterUserPage {

    constructor(){

        this.formRegisterUser = {
            txtName: "#name",
            txtEmail: "#email",
            txtPassword: "#password",
            btnButtonRegister: "#register"
        }

        this.tableTitle = ".table-title"
        this.table = "table"

        this.messageError = ".error"
    }

    validateFieldsForm(){
        cy.get(this.formRegisterUser.txtName).should("exist").and("be.empty")
        cy.get(this.formRegisterUser.txtEmail).should("exist").and("be.empty")
        cy.get(this.formRegisterUser.txtPassword).should("exist").and("be.empty")
        cy.get(this.formRegisterUser.btnButtonRegister).should("exist")
        cy.get(this.tableTitle).should("not.exist")
    }

    registrationUserSucessfull(datatable){

        this.validateFieldsForm()

        datatable.hashes().forEach(element =>{
            cy.get(this.formRegisterUser.txtName).type(element.name)
            cy.get(this.formRegisterUser.txtEmail).type(element.email)
            cy.get(this.formRegisterUser.txtPassword).type(element.password)
            cy.get(this.formRegisterUser.btnButtonRegister).click()
        })
        

    }
  
    validateRegister(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.table).contains(element.validationName)
            cy.get(this.table).contains(element.validationEmail)

        })

    }

    registrationUserFieldsEmpty(){
        cy.get(this.formRegisterUser.btnButtonRegister).click()
    }

    validateFieldsEmpty(){
        cy.get(this.messageError).eq(6).should("be.visible").and("contain", "O campo Nome é obrigatório.")
        cy.get(this.messageError).eq(76).should("be.visible").and("contain", "O campo E-mail é obrigatório.")
        cy.get(this.messageError).eq(78).should("be.visible").and("contain", "O campo Senha é obrigatório.")

        this.validateFieldsForm()

    }

    registrationUserIncompleteName(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.formRegisterUser.txtName).type(element.name)
            cy.get(this.formRegisterUser.txtEmail).type(element.email)
            cy.get(this.formRegisterUser.txtPassword).type(element.password)

        })
    }

    clickButtonRegister(){
        cy.get(this.formRegisterUser.btnButtonRegister).click()
    }

    validateIncompleteName(datatable){
        datatable.hashes().forEach(element =>{

            cy.get(this.messageError).eq(0).should("be.visible").and("contain", element.messageValidation)
            cy.get(this.tableTitle).should("not.exist")

        })


    }

    registrationUserEmailInvalid(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.formRegisterUser.txtName).type(element.name)
            cy.get(this.formRegisterUser.txtEmail).type(element.email)
            cy.get(this.formRegisterUser.txtPassword).type(element.password)

        })

    }

    validateEmailInvalid(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.messageError).eq(0).should("be.visible").and("contain", element.messageValidation)
            cy.get(this.tableTitle).should("not.exist")
        })


    }

    registrationUserPasswordInvalid(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.formRegisterUser.txtName).type(element.name)
            cy.get(this.formRegisterUser.txtEmail).type(element.email)
            cy.get(this.formRegisterUser.txtPassword).type(element.password)
        })
        
    }

    validatePasswordInvalid(datatable){
        datatable.hashes().forEach(element =>{
            cy.get(this.messageError).eq(0).should("be.visible").and("contain", element.messageValidation)
            cy.get(this.tableTitle).should("not.exist")
        })
    }

    deleteUser(){
        cy.get(this.table).contains("Excluir").click()
    }

    validateDeleateUser(datatable){
        datatable.hashes().forEach(element =>{ 
            this.validateFieldsForm()
        })

    }

}export const registerUserPage = new RegisterUserPage()