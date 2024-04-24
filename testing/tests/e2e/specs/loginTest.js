
describe('Login Test Feature',()=>{    
    /*
    ANTES DE REFACTORIZAR
    it('user can not access to protected route when is not logged in',()=>{
        //cuando yo quisiera ir a la ruta de post deberia mandarme al login
        cy.visit('/post')
        cy.url().should('eq','http://localhost:8080/login')
    })

    it('user with wrong credentials can not pass',()=>{
        //cuando se quisiera logear con un usuario incorrecto
        cy.visit('/login')
        cy.get('#username').type("userdemo")
        cy.get('#password').type('passworddemo')
        cy.get('button').click()
        cy.contains('p',"Wrong Credentials")
        cy.url().should('eq','http://localhost:8080/login')
    })

    it('user can succesfully login',()=>{
        cy.visit('/login')
        cy.get('#username').type("admin")
        cy.get('#password').type('admin')
        cy.get('button').click()
        cy.url().should('eq','http://localhost:8080/post')
    })
    */
   
   it('user can not access to protected route when is not logged in',()=>{
       //cuando yo quisiera ir a la ruta de post deberia mandarme al login
       cy.visit('/post')
       cy.url().should('eq','http://localhost:8080/login')
    })
    
    it('user with wrong credentials can not pass',()=>{
        //cuando se quisiera logear con un usuario incorrecto
        // cy.visit('/login')
        // cy.get('#username').type("userdemo")
        // cy.get('#password').type('passworddemo')
        // cy.get('button').click()
        
        //Custom comands -- comandos personalizados en el archivo support/commands.js
        cy.login("userdemo","passworddemo")
        cy.contains('p',"Wrong Credentials")
        cy.url().should('eq','http://localhost:8080/login')
    })

    it('user can succesfully login',()=>{
        // cy.visit('/login')
        // cy.get('#username').type("admin")
        // cy.get('#password').type('admin')
        // cy.get('button').click()
        cy.login("admin","admin")
        cy.url().should('eq','http://localhost:8080/post')
    })

});

