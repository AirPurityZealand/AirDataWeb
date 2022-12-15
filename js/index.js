const baseUrl = "https://airapizealand.azurewebsites.net/api/Air"
//const baseUrl = "http://jsonplaceholder.typicode.com/users" 

// Should work with any REST GET url that returns an array of objects

Vue.createApp({
    data() {
        return {
            data: [],
            message: null
        }
    },
    async created() {
       try {
           const response = await axios.get(baseUrl)
           this.data = await response.data
       } catch (error) {
           this.message = error.message
       }  
    }
}).mount("#app")