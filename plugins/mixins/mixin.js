import $ from "jquery";

const mixin = {
    methods: {
        /**
                 * api통신
                 * @param {*} object 
                 */
        requestApi (object) {
            if (!object.url) return ;
            
            return new Promise((resolve, reject) => {
                try {
                    $.ajax({
                        type: object.type ? object.type : "POST",
                        url: object.url,
                        data: object.data ? object.data : "",
                        success (result) {
                            resolve(result);
                        },
            
                        error(error) {
                            reject(error)
                        }
                    });
                }
            
                catch(error) {
                    reject(error)
                }
            })
        },
    }
}

export default mixin;