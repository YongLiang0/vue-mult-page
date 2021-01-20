import {get, post, put, del} from "../http.js";
import API from "../api/api_index.js";

const INTERFACE = {

    /**
     * 获取banner配置
     */
    getBannerList(){
        return get(API.API_GET_BANNER);
    },

    /**
     * 获取歌单列表
     */
    getSongsList(){
        return get(API.API_GET_SONGS_LIST);
    },

};

export default INTERFACE;