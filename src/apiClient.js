
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
    static async request2({endpoint, method, body, token}){
      try{
        let headers = {'Content-Type': 'application/json'}
        if(token) headers['Authorization']=`Bearer ${token}`
        let request = {
        method:method,
        headers: headers,
      }
      if(body) request['body']= JSON.stringify(body)

      console.log('request', request)
      
      const resp = await fetch(baseURL+endpoint,request)
      const data = await resp.json()
      
      console.log(data)
      
      if(data.error) throw(data.error)
      return  data.data ? data.data : null

      }
      catch(err){
        console.error(err)
      }
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
    static async authenticate2(endpoint, bodyData){
      const data = await this.request2({
        endpoint:endpoint,
        method:'POST',
        body: {user:{
          username:bodyData.username,
          password:bodyData.password
        }},
        token:null
      })
      return data
    }


    static async getPosts(){
        const endpoint = '/posts'
        const data = await this.request( endpoint )
        return data.posts;
    }
    static async getPosts2(){
      const endpoint = '/posts'
        const data = await this.request2({
          endpoint:endpoint,
          method:'GET'
        })
        return data
    }

    static async makePost(token, postData){
        // console.log(baseURL+endpoint)
        const endpoint = '/posts'
        const resp = await fetch(baseURL+endpoint,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                post: {
                  title: postData.title,
                  description: postData.description,
                  price: postData.price
                }
              })
        })
        const data = await resp.json()
        data.error ? console.log("error in API Call"): null
        return  data.data ? data.data : null
    }
    static async makePost2(token, postData){
      const endpoint = '/posts'
        const data = await this.request2({
          endpoint:endpoint,
          method:'POST',
          body:{post: {
            title: postData.title,
            description: postData.description,
            price: postData.price
          }},
          token:token
        })
        return data
    }

    static async deletePost(token,postID){
      // console.log(baseURL+endpoint)
      const endpoint = '/posts/'
      const resp = await fetch(baseURL+endpoint+postID,{
          method:'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        })
        const data = await resp.json()
        data.error ? console.log("error in API Call"): null
        return  data.data ? data.data : null
    }
    
    static async deletePost2(token, postID){
      const endpoint = '/posts/'+postID
        const data = await this.request2({
          endpoint:endpoint,
          method:'DELETE',
          token:token
        })
        return data
    }
}

export default API;