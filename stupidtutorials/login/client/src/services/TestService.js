// Import the Api module
import Api from '@/services/Api'

export default {
  testGet() {
    return Api().get('/');
  },
  testPost(payload) {
    return Api().post('/post', payload);
  }
}
