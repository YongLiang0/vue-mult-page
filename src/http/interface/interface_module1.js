import {get, post, put, del} from "../http.js";
import API from "../api/api_module1.js";

const INTERFACE = {

    /**
     * 获取首页配置
     */
    getList1(){
        return get(API.API_TEST1);
    },

};

export default INTERFACE;