const ninjas = new Vue({
  el: '#app',
  data: {
    ninjasArray: [],
    lng: '',
    lat: ''
  },
  methods: {
    getNinjas() {
      fetch(`/api/ninjas?lng=${this.lng}&lat=${this.lat}`)
        .then(data => data.json())
        .then(data => {
            data.map(ninjas => this.ninjasArray.push(ninjas))
        })
    },
    postNinjas() {

    },
    putNinjas() {

    },
    deleteNinjas(){

    },
  }
});
