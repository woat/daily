<template>
  <div class="Checkboxes">
    <div class="card">
      <div class="card-content">
        {{ test }}
        <h1>Filters</h1>
        <hr>
        <h1>Manufacturers</h1>
        <div v-for="box in checkboxes">
          <input type="checkbox" v-model="filters" :value="box.manufacturer"> {{box.manufacturer}}
        </div>
        <hr>
        <h1>Model</h1>
        <div v-for="box in checkboxes">
          <input type="checkbox" v-model="filters" :value="box.model"> {{box.model}}
        </div>
        <hr>
        <h1>Size</h1>
        <div v-for="box in checkboxes">
          <input type="checkbox" v-model="filters" :value="box.size"> {{box.size}}
        </div>
        <hr>
        <h1>Type</h1>
        <div v-for="box in checkboxes">
          <input type="checkbox" v-model="filters" :value="box.type"> {{box.type}}
        </div>
        <hr>
        <h1>Score</h1>
        <div v-for="box in checkboxes">
          <input type="checkbox" v-model="filters" :value="box.score"> {{box.score}}
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
    'test'
  ],
  data: function () {
    return {
    }
  }
}
</script>
