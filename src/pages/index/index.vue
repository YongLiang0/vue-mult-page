<template>
    <div class="page-index">
        
    </div>
</template>

<script>
import mixin from '@/mixin/index.js';
import INTERFACE from '@/http/interface/interface_module1.js';
export default {
    mixins : [ mixin ],
    data(){
        return{
            
        }
    },

    mounted() {
        this.test();
    },

    methods : {
        
        /**
         * 测试
         */
        async test(){
            let res = await INTERFACE.getList1();
            console.log(res)
        }
    }
}
</script>