import './server_host.js';

export default function(url){
    return `${window.CONFIG.GLOBAL_BASE_URL}/${url}`;
};