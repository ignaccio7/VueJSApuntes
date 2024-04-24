
describe('Post Test Feature',()=>{
    /*
    ANTES DE REFACTORIZAR
    it('Logged user can access to page posts and view the post list',()=>{
        //hacemos el login
        cy.visit('/login')
        cy.get('#username').type("admin")
        cy.get('#password').type('admin')
        cy.get('button').click()
        cy.url().should('eq','http://localhost:8080/post')
        //verificamos los posts
        cy.contains("h1",'List Posts')
        //verificamos que algun titulo de la api jsonplaceholder se haya pintado en el dom
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('Logged user can access to detail post view',()=>{
        //hacemos el login
        cy.visit('/login')
        cy.get('#username').type("admin")
        cy.get('#password').type('admin')
        cy.get('button').click()
        cy.url().should('eq','http://localhost:8080/post')
        //verificamos que entre al detail
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })

    it('Logged user can go back from detail post view',()=>{
        //hacemos el login
        cy.visit('/login')
        cy.get('#username').type("admin")
        cy.get('#password').type('admin')
        cy.get('button').click()
        cy.url().should('eq','http://localhost:8080/post')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        //verificamos que pueda ir hacia atras
        cy.get('.link').click()
        cy.url().should('eq','http://localhost:8080/post')
    })
    */
   //antes de cada ruta lo que debemos probar esque se logee y entre a la vista del post
    beforeEach(() => {
        //hacemos el login
        // cy.visit('/login')
        // cy.get('#username').type("admin")
        // cy.get('#password').type('admin')
        // cy.get('button').click()
        cy.login("admin","admin")
        cy.url().should('eq','http://localhost:8080/post')
    });

    it('Logged user can access to page posts and view the post list',()=>{
        //hacemos el login-->     
        //verificamos los posts
        cy.contains("h1",'List Posts')
        //verificamos que algun titulo de la api jsonplaceholder se haya pintado en el dom
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('Logged user can access to detail post view',()=>{
        //hacemos el login-->
        //verificamos que entre al detail
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    })

    it('Logged user can go back from detail post view',()=>{
        //hacemos el login-->        
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        //verificamos que pueda ir hacia atras
        cy.get('.link').click()
        cy.url().should('eq','http://localhost:8080/post')
    })

});

