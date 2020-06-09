/**
 * 接口
 */
import {get, post, put, del} from "./http";
import API from "./api";

const INTERFACE = {

    /**
     * 获取首页配置
     */
    getPageIndex(brandId){
        return post(`${API.API_GET_PAGE_INDEX}?brandId=${brandId}`);
    },

};

export default INTERFACE;