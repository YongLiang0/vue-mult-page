const mixin = {
    data() {
        return {
            
        }
    },

    created() {
        
    },

    methods : {

        /**
         * 成功toast
         */
        $success(msg){
            nutui.default.Toast.success(msg)
        },

        /**
         * 失败toast
         */
        $error(msg){
            nutui.default.Toast.fail(msg)
        },


    },
};

export default mixin;