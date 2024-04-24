// POR DEFECTO
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa:{
    name:'PWA',
    themeColor:'#3344ff',
    backgroundColor:"#ccc"
    //si queremos configurarlo asi de mejor manera pues revisamos la pagina
    //https://cli.vuejs.org/core-plugins/pwa.html   ahi podremos ver un listado de configuraciones a usar
  }
})

