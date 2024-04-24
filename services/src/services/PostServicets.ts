/* DE ESTA CON TS */
import { ref,Ref } from "vue";
import IPost from "@/interfaces/IPost";

class PostService {

    private posts:Ref<Array<IPost>>;

    constructor() {
        this.posts = ref<Array<IPost>>([]);
    }

    get getPosts():Ref<Array<IPost>>{
        return this.posts;
    }

    async fetchAll():Promise<void>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const json = await response.json();
        this.posts.value = json;
    }

}

export default PostService;