import axios from "axios"
// const axios = require('axios')

export default async function getData(number){
    try {
        const { data: users } = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`)
        const { data: posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)

        const obj = { 
            user: users,
            posts: posts
        }
        console.log(obj)
    } catch (error) {
        console.error(error)
    }
}
