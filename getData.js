import axios from "axios";

export default async function getData(id) {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        console.log(data);
        console.log("Posts: ", posts);
}