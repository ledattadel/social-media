import axios from 'axios'

export const httpRequest = axios.create({
    baseURL: 'http://localhost:5000',
});

export const getDataAPI = async (url, token) => {
    const res = await httpRequest.get(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await httpRequest.post(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await httpRequest.put(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await httpRequest.patch(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await httpRequest.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}