import axios from "axios"
// h5UI库todo
function request(options) {
    return axios(options).then(res => {
        return res
    }).catch(err => {
        const { response: { status, statusText } } = err;
        console.err(status, statusText)
        return Promise.reject(err)
    })
}

export default request