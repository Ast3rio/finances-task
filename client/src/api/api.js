import axios from 'axios';

export const baseURL = 'url';

export const combineURLs = (baseURL, url) => {
    return url ?
        baseURL.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '')
        : baseURL
}

export const postRequest = ({url, data, success, setError, headers = {}}) => {
    axios.post(`${combineURLs(baseURL, url)}`, data, {
        headers
    })
        .then(res => success(res))
        .catch(error = setError(error))
}

export const getRequest = ({url, success, setError}) => {
    axios.post(`${combineURLs(baseURL, url)}`)
        .then(res => success(res))
        .catch(error = setError(error))
}
