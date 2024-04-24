import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

//directiva simple
app.directive('font-size',{
    beforeMount : (el,binding)=>{
        el.style.fontSize = "30px"
    }
})
//directiva personalizada con valores
app.directive('custom-size',{
    beforeMount : (el,binding) =>{
        el.style.fontSize = binding.value+"px"
    }
})
//directiva personalizada con argumentos
app.directive('custom-size-args',{
    beforeMount : (el,binding)=>{
        let size = 10;
        switch (binding.arg) {
            case 'sm':
                size = 8
                break;
            case 'md':
                size = 10
                break;
            case 'lg':
                size = 20
                break;        
            default:
                size = 10
                break;
        }
        el.style.fontSize = size+"px";
    }
})

//directiva personalizada con modificadores
app.directive('custom-font',{
    beforeMount:(el,binding)=>{
        let size = 10;
        
        if(binding.modifiers.md){
            size = 20
        }else if(binding.modifiers.lg){
            size = 30
        }

        el.style.fontSize = size+"px"

        if(binding.modifiers.red){
            el.style.color = "#ff0000"
        }else if(binding.modifiers.green){
            el.style.color = "#00ff00"            
        }else if(binding.modifiers.blue){
            el.style.color = "#0000ff"
        }

    }
})

app.mount('#app')
