const _server_host_config = {
    'dev' : {
        API_BASE_URL : ''
    },
    'test' : {
        API_BASE_URL : ''
    },
    'preview' : {
        API_BASE_URL : ''
    },
    'product' : {
        API_BASE_URL : ''
    }
};

export default function(url){
    let API_BASE_URL = _server_host_config[GLOBAL_ENV].API_BASE_URL;
    return `${API_BASE_URL}/${url}`;
};