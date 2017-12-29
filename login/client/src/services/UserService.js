import Api from '@/services/Api'

export default {
  test() {
    return Api().delete('/test')
  },
  login(credentials) {
    return Api().post('/login', credentials)
    /* Login takes the credentials of the user
     * consisting of an Email and Password and
     * sends to to the back-end and then returns
     * a user id and token to be set in the store. */
  },
  logout(credentials) {
    return Api().post('/logout', credentials)
    /* Logout takes credentials that were saved
     * in the store from Login and sends it to
     * the back-end and removes the token from
     * the user document in the database. */
  },
  register(credentials) {
    return Api().post('/register', credentials)
  }
}
