// https://docs.cypress.io/api/table-of-contents

//esta comprobando que se puede visitar la ruta raiz que estamos construyendo
// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App')
//   })
// })

//agregaremos un test para el contador en la vista de home
//describe nos sirve para indicar la estructura de nuestro test
//recibe un nombre del test y una funcion anonima
/*describe("Test Name",()=>{
  //Test execution
})*/

//Podemos ir describiendo cada unos de los pasos que vamos dando
//Comprobaremos que pasa si pulso un enlace a dondeme lleva o si esque me logeo erroneamente o exitosamente
/*it('Example name',()=>{
  //Step execution
})*/


//Tambien tenemos el objeto de cy que nos permite ejecutar metodos para ejecutar las comprobaciones necesarias
// cy.visit('/xurl')//Nos sirve para visitar una url

// cy.url()//Para comprobar a que url se ah ido .. Obtiene la url en la que nos encontramos

// cy.contains("label","Content")//Para comprobar que la pagina esta ofreciendo contenido que deberia ofrecer. Comprueba si la pagina contiene el elemento descrito

// cy.should("contains","Hello Cypress") //es el equivalente al contains pero el should es de proposito generalista
// cy.should('have.css','color','red')//podriamos comprobar cuando se lance un mensaje de error si esque tiene los css necesario.... Comprobacion de proposito general sobre el elemento aplicado

// cy.request('POST','url',{})//para verificar peticiones


// cy.get('.class') //Podemos hacer comprobaciones como si el estuviera logeando osea escribe el usuario el password y luego da click--- Para obtener elementos
// cy.get('#id') //para obtener elemenentos
// cy.get('[data-test-id="myId"]') //Obtiene un elemento en especifico en funcion a su argumento

// //para poder ejecutar acciones sobre estos elementos que obtenemos
// cy.click() //Acccion click
// cy.type("username") //Accion escribir


//GENERAMOS NUESTRO PRIMER TEST SOBRE NUESTRO CONTADOR EN EL HOME
describe('Counter Feature', ()=>{
  it('user can access to page',()=>{
    cy.visit('/')
    cy.contains('h1','Contador App')
  })

  it('user can increment counter',()=>{
    cy.visit('/')
    cy.get('#counter').contains('0')
    cy.contains('button','Incrementar').click()
    cy.get('#counter').contains('1')
  })

})

//
//
//
//
//
//
//
//
//
//



