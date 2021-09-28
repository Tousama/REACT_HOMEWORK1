import axios from "axios";

export default async function getData(num) { //"num=>number"
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${num}`) 
    const { data : post } = await axios(`https://jsonplaceholder.typicode.com/posts/${num}`)

    const finalData = {...user, ...post};
    console.log(finalData);
};
