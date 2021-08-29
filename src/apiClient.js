
const baseURL = 'https://strangers-things.herokuapp.com/api/2021-SJS-RM-WEB-PT'

class API {
    static async request({endpoint, method, body, token}){
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
      const data = await this.request({
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
        const data = await this.request({
          endpoint:endpoint,
          method:'GET'
        })
        console.log("XXX",data)
        return data.posts
    }

    static async makePost(token, postData){
      const endpoint = '/posts'
        const data = await this.request({
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

    static async deletePost1(token,postID){
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

    static async deletePost(token, postID){
      const endpoint = '/posts/'+postID
        const data = await this.request({
          endpoint:endpoint,
          method:'DELETE',
          token:token
        })
        return data
    }

    static async makeMessage(token, postID, message){
      const endpoint = `/posts/${postID}/messages`
        const data = await this.request({
          endpoint:endpoint,
          method:'POST',
          body:{message: {
            content: message,
          }},
          token:token
        })
        return data
    }

    static async editPost(token, postID, postData){
      const endpoint = '/posts/'+postID
      const data = await this.request({
        endpoint:endpoint,
        method:'PATCH',
        body:{post: {
          title: postData.title,
          description: postData.description,
          price: postData.price
        }},
        token:token
      })
      return data
    }



}

export default API;