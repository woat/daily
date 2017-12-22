import Api from '@/services/Api'

export default {
  test() {
    return Api().post('/test')
  },
  login(payload) {
    return Api().post('/login', payload)
  }
}
