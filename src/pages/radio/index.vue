<template>
    <div class="page">
        <Navbar></Navbar>
        <div class="body" v-if="loadingComplete">
            <cube-scroll-nav 
                ref="scroll"
                :side="true"
                :data="list"
                :current="current"
                :options="scrollOptions"
                @change="scrollChange">

                <cube-scroll-nav-panel 
                    v-for="item in list" 
                    :key="item.label"
                    :label="item.label"
                    :title="item.label">
                   
                    <div class="panel-item">
                        <div class="title">
                            <b v-text="item.label"></b>
                            <span></span>
                        </div>
                        <div class="list flex">
                            <div class="item" v-for="(secItem, secIndex) in item.children" :key="secIndex">
                                <img :src="secItem.cover" />
                                <h3 v-text="secItem.label"></h3>
                                <p v-text="secItem.desc"></p>
                            </div>
                        </div>
                    </div>

                </cube-scroll-nav-panel>

            </cube-scroll-nav>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixin/index.js';
import INTERFACE from '@/http/interface/interface_radio.js';
import Navbar from '@/pages/components/Navbar/index.vue';
export default {
    mixins : [ mixin ],

    components : {
        Navbar
    },

    data(){
        return{
            loadingComplete : false,
            list : [],
            scrollOptions: {
                bounce : {
                    top : false
                }
            },
            current : '',
            list : []
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
            this.getRadioList();
        },

        /**
         * 获取电台列表
         */
        async getRadioList(){
            let res = await INTERFACE.getRadioList();
            if(res){
                this.list = res || [];
                this.loadingComplete = true;
            }
        },

        /**
         * 刷新，当内容或高度发生变化时可用于重新计算整体内容、位置
         */
        refreshScroll(){
            this.$refs.scroll.refresh();
        },

        /**
         * 监听滚动
         */
        scrollChange(){
            this.refreshScroll();
        }
    }
}
</script>