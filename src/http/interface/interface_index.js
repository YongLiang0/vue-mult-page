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

    /**
     * 获取歌曲专区列表
     */
    getSongAreaList(){
        return get(API.API_GET_SONG_AREA_LIST);
    },

    
};

export default INTERFACE;