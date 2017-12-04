<template>
  <div id="Parts">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2">
              <Checkboxes 
                :test="testProp"
                :checkboxes="checkboxes"/>
            </div>
            <div class="column">
              <JsonTable :displayedInventory="displayedInventory"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Checkboxes from './PartsComponents/Checkboxes'
import JsonTable from './PartsComponents/JsonTable'

function populateInventory () {
  const pop = [
    {
      manufacturer: 'Smoant',
      model: 'BattleStar',
      size: 'Mini',
      type: 'VW/VT',
      score: '5',
      price: '1000',
      visibility: true
    },
    {
      manufacturer: 'Smoant',
      model: 'BattleStar',
      size: 'Full',
      type: 'VW/VT',
      score: '5',
      price: '1200',
      visibility: true
    },
    {
      manufacturer: 'VooPoo',
      model: 'Drag',
      size: 'Full',
      type: 'VW/VT',
      score: '5',
      price: '1500',
      visibility: true
    }
  ]
  return pop;
}

export default {
  name: 'Parts',
  components: {
    Checkboxes,
    JsonTable
  },
  data () {
    return {
      inventory: {},
      displayedInventory: {},
      checkboxes: { manu: 'gang' },
      filters: [],
      testProp,
    }
  },
  watch: {
    filters: function () {

    }
  },
  methods: {
  },
  created: function () {
    this.inventory = populateInventory();
    this.displayedInventory = this.inventory;
    this.testProp = this.inventory;
    console.log('created');
  }
}
</script>
