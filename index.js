const baseUri = "https://airapizealand.azurewebsites.net/api/Air"



Vue.createApp({
    data() {
        return {
            airdata: [],
            error: null,
        }
    },
    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.helperGetAir(baseUri)
    },
    methods: {
        async helperGetAir(baseUri) {
            try {
                const response = await axios.get(baseUri)
                this.airdata = await response.data
                this.error = null
            } catch (ex) {
                this.airdata = []
                this.error = ex.message
            }
        }

    }
}).mount("#app")
