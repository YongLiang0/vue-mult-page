<template>
    <div class="page">
        <!-- 导航 -->
        <Navbar></Navbar>

        <!-- 页面主体内容 -->
        <div class="body scroll">
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
                <div class="list">
                    <nut-scroller>
                        <div slot="list" class="item" v-for="(songsItem, songsIndex) in item.list" :key="'s' + songsIndex">
                            <img :src="songsItem.url"/>
                            <p v-text="songsItem.desc"></p>
                        </div>
                    </nut-scroller>
                </div>
            </section>

            <!-- 专区 -->
            <section class="songs">
                <div class="title flex">
                    <h2>专区</h2>
                    <div class="more grow flex je ac">
                        更多 <nut-icon type="right" size="12px" color="#999"></nut-icon>
                    </div>
                </div>
                <div class="list">
                    <nut-scroller>
                        <div slot="list" class="item w6" v-for="(item, index) in songAreaList" :key="index">
                            <img :src="item.url"/>
                            <p v-text="item.desc"></p>
                        </div>
                    </nut-scroller>
                </div>
            </section>
        </div>
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
            songsList : [],
            songAreaList : []
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
            this.$loading('加载中...');
            this.getBannerList();
            this.getSongsList();
            this.getSongAreaList();
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
                this.$hideLoading();
            }
        },

        /**
         * 获取歌曲专区列表
         */
        async getSongAreaList(){
            let res = await INTERFACE.getSongAreaList();
            if(res){
                this.songAreaList = res || [];
                this.$hideLoading();
            }
        }

    }
}
</script>