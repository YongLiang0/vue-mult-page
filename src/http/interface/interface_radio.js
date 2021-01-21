import {get, post, put, del} from "../http.js";
import API from "../api/api_radio.js";

const INTERFACE = {

    /**
     * 获取电台列表
     */
    getRadioList(){
        return get(API.API_GET_RADIO_LIST);
    },

};

export default INTERFACE;