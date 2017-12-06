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
import populateInventory from './PartsComponents/testdata';

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
      this.filters = data;
    },
    test() {
      // Shorthand.
      const chk = this.filters;
      const inv = this.inventory;
      // This object will be used for the comparisons/filters.
      const fil = {};

      // Remove props with no filters.
      for (let prop in chk) {
        if (chk[prop].length) fil[prop] = chk[prop]
      }

      const filLength = Object.keys(fil).length;

      let filInv = inv.filter(item => {
        let count = 0;
        for (let prop in fil) {
          // Each prop has an array of Strings to match.
          fil[prop].forEach(filterProp => {
            if (item[prop].includes(filterProp)) count += 1;
          });
        }
        // A count is used to check the amount of props
        // that must match. It is checked against the filLength
        // which is how many props are in the filters object.
        if (count === filLength) return true;
      })

      this.displayedInventory = filInv;
    }
  },
  watch: {
    filters: {
      handler(filter) {
        this.populateFilters(filter);
        this.test()
      },
      deep: true,
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
