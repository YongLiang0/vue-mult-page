<template>
    <div class="page-music">
        <Navbar></Navbar>
        <div>音乐馆</div>
    </div>
</template>

<script>
import mixin from '@/mixin/index.js';
import Navbar from '@/pages/components/Navbar/index.vue';
export default {
    mixins : [ mixin ],

    components : {
        Navbar
    },

    data(){
        return{
        }
    },

    mounted() {
        this.init();
    },

    methods : {

        /**
         * 初始化
         */
        init(){
        }
    }
}
</script>