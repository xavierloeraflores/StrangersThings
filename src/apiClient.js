
const baseURL = 'https://strangers-things.herokuapp.com/api/2021-SJS-RM-WEB-PT'

class API {
    static async request(method, endpoint){
        console.log(baseURL+endpoint)
        const resp = await fetch(baseURL+endpoint)
        const data = await resp.json()
        console.log(data)
        data.error ? console.log("error in API Call"): null
        return  data.data ? data.data : []
    }


    static async getPosts(){
        const endpoint = '/posts'
        const data = await this.request('GET', endpoint )
        return data.posts;
    }
}

export default API;