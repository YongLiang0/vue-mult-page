axios.interceptors.request.use((request) => {
    return request;
})

//设置拦截器 重试机制
axios.interceptors.response.use(response => {
	return Promise.resolve(response.data);
}, err => {
	nutui.default.Toast.fail('数据请求失败！');
});

const request = (url, params = {}, headers = {}, method = 'get') => {
	let options = {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			...headers,
		},
		method: method
    };
    
	if (method === 'post' || method == 'put') {
		if (options.headers['Content-Type'] === 'application/json;charset=UTF-8') {
			options.data = params;
		}
		else {
			options.params = params;
		}
	}
	else if (method === 'get' || method == 'delete') {
		options.params = params;
	}
	return axios({ url, ...options });
};

export const get = request;

export const post = (url, params, headers) => request(url, params, headers, 'post');

export const del = (url, params, headers) => request(url, params, headers, 'delete');

export const put = (url, params, headers) => request(url, params, headers, 'put');