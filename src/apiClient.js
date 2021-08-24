
const baseURL = 'https://strangers-things.herokuapp.com/api/2021-SJS-RM-WEB-PT'

class API {
    static async request(endpoint){
        console.log(baseURL+endpoint)
        const resp = await fetch(baseURL+endpoint)
        const data = await resp.json()
        console.log(data)
        data.error ? console.log("error in API Call"): null
        return  data.data ? data.data : null
    }

    static async authenticate2(endpoint, body){
        console.log("API", endpoint, body.username, body.password)
    }
    static async authenticate(endpoint, bodyData){
        // console.log(baseURL+endpoint)
        const resp = await fetch(baseURL+endpoint,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user: {
                  username: bodyData.username,
                  password: bodyData.password
                }
              })
        })
        const data = await resp.json()
        data.error ? console.log("error in API Call"): null
        localStorage.setItem('userToken', data.data.token)
        return  data.data ? data.data : null
    }

    static async register(username, password){
        const data = this.authenticate('/users/register', {username:username,password:password})
        console.log(data)
        return data.token
    }
    
    static async login(username, password){
        const data = this.authenticate('/users/login', {username:username,password:password})
        return data.token
    }

    static async getPosts(){
        const endpoint = '/posts'
        const data = await this.request( endpoint )
        return data.posts;
    }
}

export default API;