const ninjas = new Vue({
  el: '#app',
  data: {
    ninjasArray: [],
    lng: '',
    lat: '',
    newNinja: {
      name: '',
      rank: '',
      available: false,
      geometry: {
        type: "point",
        lng: '',
        lat: ''
      }
    }
  },
  methods: {
    getNinjas() {
      this.ninjasArray = [],
      fetch(`/api/ninjas?lng=${this.lng}&lat=${this.lat}`)
        .then(data => data.json())
        .then(data => {
            data.map(ninjas => this.ninjasArray.push(ninjas))
        })
    },
    postNinjas() {
      const postHeaders = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.newNinja.name,
          rank: this.newNinja.rank,
          available: this.newNinja.available,
          geometry: { 
            type: this.newNinja.type,
            coordinates: [this.newNinja.lng, this.newNinja.lat]
          }
        })
      };

      fetch(`/api/ninjas`, postHeaders)
        .then( res => res.json() )
        .then( res => console.log(res) )
        .catch( err => console.error(err) )
    },
    putNinjas() {

    },
    deleteNinjas(){

    },
  }
});
