export default {
    asyncData(context) {
        // return context.$axios
        //             .get('http://jsonplaceholder.typicode.com/posts/1')
        //             .then(res => {
        //                 return { 
        //                     fetchedData: res.data
        //                 }
        //             })
    },

    head() {
        return {
            title: "ELBUM",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "ELBUM"
                },
            ]
        }
    },

    data() {
        return {
            
        }
    },

    created() {
        if (process.server) {
        }
    },

    methods: {
        
    }
}