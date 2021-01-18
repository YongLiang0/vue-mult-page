<template>
    <div class="page-index">
        <!-- <mini-player :video="video"></mini-player> -->
    </div>
</template>

<script>
import mixin from '@/mixin/index.js';
import INTERFACE from '@/http/interface/interface_module1.js';
import miniPlayer from '@/components/miniPlayer/index.vue';
export default {
    mixins : [ mixin ],

    components : {
        miniPlayer
    },

    data(){
        return{
            video : {
                url : '/static/file/blackpink.mp4'
            }
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
            if(res){

            }
        }
    }
}
</script>