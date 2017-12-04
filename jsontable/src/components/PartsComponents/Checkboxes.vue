<template>
  <div class="Checkboxes">
    <div class="card">
      <div class="card-content">
        <button v-on:click="clickit">tester</button>
        <h1>Filters</h1>
        <hr>
        <h1>Manufacturers</h1>
        <div v-for="item in manufacturer">
          <input type="checkbox" v-model="checked.manufacturer" :value="item"> {{item}}
        </div>
        <hr>
        <h1>Model</h1>
        <div v-for="item in model">
          <input type="checkbox" v-model="checked.model" :value="item"> {{item}}
        </div>
        <hr>
        <h1>Size</h1>
        <div v-for="item in size">
          <input type="checkbox" v-model="checked.size" :value="item"> {{item}}
        </div>
        <hr>
        <h1>Type</h1>
        <div v-for="item in type">
          <input type="checkbox" v-model="checked.type" :value="item"> {{item}}
        </div>
        <hr>
        <h1>Score</h1>
        <div v-for="item in score">
          <input type="checkbox" v-model="checked.score" :value="item"> {{item}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Checkboxes',
  props: [
    'chkboxes',
  ],
  data() {
    return {
      manufacturer: [],
      model: [],
      size: [],
      type: [],
      score: [],
      price: [],
      checked: {
        manufacturer: [],
        model: [],
        size: [],
        type: [],
        score: [],
        price: [],
      },
    };
  },
  methods: {
    clickit() {
      console.log('emit the event');
      this.$emit('test', this.chkboxes)
    },
    initialBoxes() {
      this.chkboxes.map((item) => {
        // Each prop corresponds to matching data array.
        for (let prop in item) {
          if (!this[prop].includes(item[prop])) this[prop].push(item[prop]);
        }
      });
    },
  },
  watch: {
    // Everytime a filter is checked, send the updated 'checked' to parent.
    checked: {
      handler(checkedObj) {
        this.$emit('checked', checkedObj);
      },
      deep: true, 
    }
  },
  created() {
    this.initialBoxes();
  }
}
</script>
