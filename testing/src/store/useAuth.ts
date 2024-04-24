
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuth = defineStore('useAuth', {
    state: () => {
        return {
            isAuth: ref(false)
        }
    },
    actions: {

        login(email: string, password: string):boolean {
            if (email === "admin" && password === "admin") {
                this.isAuth = true;
                return true;
            }
            this.isAuth = false;
            return false;
        }

    }
});

