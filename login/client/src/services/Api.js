import axios from 'axios'

// TODO use config file to set baseURL
// '/api' is being used as a proxy
// check proxy settings in config/index

const baseURL = '/api'

// TODO add headers for auth
// { headers: { auth: token } }
export default () => axios.create({ baseURL })
