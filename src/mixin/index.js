const mixin = {
    data() {
        return {
            load_ins : null
        }
    },

    created() {
        
    },

    methods : {

        /**
         * 成功toast
         */
        $success(msg){
            nutui.default.Toast.success(msg);
        },

        /**
         * 失败toast
         */
        $error(msg){
            nutui.default.Toast.fail(msg);
        },

        /**
         * 加载
         */
        $loading(msg){
            this.load_ins = nutui.default.Toast.loading(msg);
        },

        /**
         * 加载
         */
        $hideLoading(){
            if(this.load_ins){
                this.load_ins.hide();
            }
        },
    },
};

export default mixin;