import getApi from '../func.js';

const API = {

    // 获取banner
    API_GET_BANNER : getApi('./static/test_data/banner.json'),

    // 获取歌单列表
    API_GET_SONGS_LIST : getApi('./static/test_data/songs.json')
};

export default API;