const _server_host_config = {
    'dev' : {
        GLOBAL_BASE_URL : ''
    },
    'preview' : {
        GLOBAL_BASE_URL : ''
    },
    'product' : {
        GLOBAL_BASE_URL : ''
    }
};

window.CONFIG = _server_host_config[GLOBAL_ENV];