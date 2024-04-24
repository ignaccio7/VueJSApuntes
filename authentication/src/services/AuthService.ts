import { ref,Ref } from "vue";

class AuthService{

    private accessToken:Ref<string>;    
    private error:Ref<string>;

    constructor(){            
        this.accessToken = ref('');
        this.error = ref('');
    }

    get getAccessToken():Ref<string>{
        return this.accessToken;
    }

    get getError():Ref<string>{
        return this.error;
    }
    
    async login(username:string,password:string):Promise<boolean>{
        try {
            const res = await fetch('http://localhost:8000/api/v1/auth/login',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    username,
                    password
                })
            })
            
            const response = await res.json();

            if ('error' in response) {
                this.error.value = "Fallo al logear";
                return false;
            }

            this.accessToken.value = response.accessToken;
            return true;

        }catch (error) {
            this.error.value = "Fallo al logear";
            return false;
        }
    }

}


export default AuthService;





