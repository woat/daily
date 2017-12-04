<template>
  <div id="Parts">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2">
              <Checkboxes 
                v-on:checked="populateFilters"
                :chkboxes="chkboxes"/>
            </div>
            <div class="column">
              <JsonTable 
                :displayedInventory="displayedInventory"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Checkboxes from './PartsComponents/Checkboxes.vue';
import JsonTable from './PartsComponents/JsonTable.vue';

function populateInventory() {
  const pop = [
    {
      manufacturer: 'Smoant',
      model: 'BattleStar',
      size: 'Mini',
      type: 'VW/VT',
      score: '5',
      price: '1000',
    },
    {
      manufacturer: 'Smoant',
      model: 'BattleStar',
      size: 'Full',
      type: 'VW/VT',
      score: '5',
      price: '1200',
    },
    {
      manufacturer: 'VooPoo',
      model: 'Drag',
      size: 'Full',
      type: 'VW/VT',
      score: '3',
      price: '1500',
    },
  ];
  return pop;
}

export default {
  name: 'Parts',
  components: {
    Checkboxes,
    JsonTable,
  },
  data() {
    return {
      inventory: {},
      displayedInventory: {},
      chkboxes: {},
      filters: {},
    };
  },
  methods: {
    populateFilters(data) {
      console.log(data, 'dataRecievedparent')
    }
  },
  created() {
    this.inventory = populateInventory();
    this.displayedInventory = this.inventory;
    this.chkboxes = this.inventory;
    console.log('created');
  },
};
</script>
