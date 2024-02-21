import axios from "axios"

async function sendLogin (data,baseURL,endpoint){
    let fullURL = `${baseURL}${endpoint}`
    return axios.post(fullURL,data)
}

export { sendLogin }