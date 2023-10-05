import axios from 'axios';

let baseURL = ""
// for developemnt 
if (process.env.NODE_ENV === 'development') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
}

const baseJsonApi = axios.create({
    baseURL: baseURL,
    responseType: 'json'
})

const baseDownloadApi = axios.create({
    baseURL: baseURL,
    responseType: 'blob'
})

// request interceptors
baseJsonApi.interceptors.request.use(
    requestInterceptorHandler,
    requestInterceptorErrorHandler
)
baseDownloadApi.interceptors.request.use(
    requestInterceptorHandler,
    requestInterceptorErrorHandler
)
// response interceptor
baseJsonApi.interceptors.response.use(
    responseInterceptorHandler,
    responseInterceptorErrorHandler
)
baseDownloadApi.interceptors.response.use(
    responseInterceptorHandler,
    responseInterceptorErrorHandler
)

// request interceptor handlers
function requestInterceptorHandler(config) {
    //do something
    return config
}

function requestInterceptorErrorHandler(error) {
    //do something
    return Promise.reject(error)
}

//response interceptor handlers
function responseInterceptorHandler(config) {
    //do something
    return config
}

function responseInterceptorErrorHandler(error) {
    //do something
    return Promise.reject(error)
}

export { baseJsonApi, baseDownloadApi };