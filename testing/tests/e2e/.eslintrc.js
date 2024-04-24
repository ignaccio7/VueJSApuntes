module.exports = {
  plugins: [
    //Los plugins agregan reglas personalizadas y características específicas para diferentes tecnologías o entornos.
    //un plugin es como una extensión que se conecta a una aplicación o sistema para agregar nuevas funciones sin modificar el código fuente principal.
    'cypress'
  ],
  env: {
    //mocha es un framework de testing
    mocha: true,
    // indica que estamos utilizando el entorno global proporcionado por Cypress para pruebas end-to-end
    'cypress/globals': true
  },
  rules: {
    strict: 'off'
  }
}
