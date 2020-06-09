/**
 * 拼接api地址
 * @param {} url 
 */
import '@/api/server_host.js';

const getApi = (url) => {
    return `${window.CONFIG.GLOBAL_BASE_URL}/${url}`;
};

const API = {

    // 首页配置
    API_GET_PAGE_INDEX : getApi(''),

};

export { API, API as default };