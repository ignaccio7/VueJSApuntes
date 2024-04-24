/* DE ESTA MANERA SERIA SOLO CON JS */

import { ref } from "vue"

class PostServices {

    private posts

    constructor() {
        this.posts = ref([]);
    }

    get getPosts() {
        return this.posts
    }

    async fetchAll() {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts";
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;
        } catch (error) {
            console.log(error);

        }
    }
}

export default PostServices