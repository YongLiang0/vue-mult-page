<template>
    <div class="page-index">

        <Navbar></Navbar>

        <!-- banner -->
        <nut-swiper
            direction="horizontal"
            :swiperData="bannerList"
            :autoPlay="3000"
            :canDragging="false"
            :paginationVisible="true">
            <div class="nut-swiper-slide" v-for="(item,index) in bannerList" :key="index">
                <img :src="item.url" />
            </div>
        </nut-swiper>

        <!-- 歌单列表 -->
        <section class="songs" v-for="(item,index) in songsList" :key="index">
            <div class="title flex">
                <h2 v-text="item.title"></h2>
                <div class="more grow flex je ac">
                    更多 <nut-icon type="right" size="12px" color="#999"></nut-icon>
                </div>
            </div>
            <div class="list flex">
                <div class="item" v-for="(songsItem, songsIndex) in item.list" :key="'s' + songsIndex">
                    <img :src="songsItem.url"/>
                    <p v-text="songsItem.desc"></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import mixin from '@/mixin/index.js';
import INTERFACE from '@/http/interface/interface_index.js';
import Navbar from '@/pages/components/Navbar/index.vue';
export default {
    mixins : [ mixin ],

    components : {
        Navbar
    },

    data(){
        return{
            bannerList : [],
            songsList : []
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
            this.getBannerList();
            this.getSongsList();
        },
        
        /**
         * 获取banner
         */
        async getBannerList(){
            let res = await INTERFACE.getBannerList();
            if(res){
                this.bannerList = res || [];
            }
        },

        /**
         * 获取歌单列表
         */
        async getSongsList(){
            let res = await INTERFACE.getSongsList();
            if(res){
                this.songsList = res || [];
            }
        },
    }
}
</script>