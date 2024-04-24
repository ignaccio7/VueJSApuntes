
import IPost from "@/interfaces/IPost";
import { ref, Ref } from "vue";

export class PostService {

    private post: Ref<IPost>;
    private posts: Ref<Array<IPost>>;

    constructor() {
        this.post = ref<IPost>({});
        this.posts = ref<Array<IPost>>([]);
    }

    get getPost(): Ref<IPost> {
        return this.post;
    }

    get getPosts(): Ref<Array<IPost>> {
        return this.posts;
    }

    async getData(): Promise<void> {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts"),
                json = await res.json();

            this.posts.value = json;
        } catch (e) {
            console.log(e);
        }
    }

    async fetchById(id: string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(url),
                json = await response.json();

            this.post.value = json;
        } catch (error) {
            console.log(error);
        }
    }

}

export default PostService;


