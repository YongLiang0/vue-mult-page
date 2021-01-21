import getApi from '../func.js';

const API = {

    // 获取banner
    API_GET_BANNER : getApi('./static/test_data/banner.json'),

    // 获取歌单列表
    API_GET_SONGS_LIST : getApi('./static/test_data/songs.json'),

    // 获取歌曲专区列表
    API_GET_SONG_AREA_LIST : getApi('./static/test_data/area.json'),
    
};

export default API;