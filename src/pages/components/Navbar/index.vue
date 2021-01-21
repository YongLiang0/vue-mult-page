<template>
    <div class="header-bar flex">
        <div class="item flex ac" 
            v-for="(item,index) in navList" :key="index"
            :class="item.isAct ? 'active' : ''"
            @click="onClickSwitchNav(item)">
            {{item.name}} <i class="bar"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList : [
                {
                    path : '/index.html',
                    name : '推荐',
                    isAct : false
                },
                {
                    path : '/music.html',
                    name : '音乐馆',
                    isAct : false
                },
                {
                    path : '/radio.html',
                    name : '电台',
                    isAct : false
                }
            ]
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
            this.initNavList();
        },

        /**
         * 初始化列表
         */
        initNavList(){
            this.navList.forEach((item) => {
                item.isAct = (window.location.pathname == item.path);
            });
        },

        /**
         * nav点击事件
         */
        onClickSwitchNav(item){
            window.location.href = item.path;
        }

    },
}
</script>
