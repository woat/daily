<template>
  <div id="jsonTable">
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-2">
              <div class="card">
                <div class="card-content">
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
            <div class="column">
              <table class="table is-striped is-fullwidth is-hoverable">
                <thead>
                  <tr>
                    <th>Manufacturer</th> <!-- smok, vaperesso, smoant -->
                    <th>Model</th> <!-- alien, tarot nano, battlestar -->
                    <th>Size</th> <!-- full, nano, stick -->
                    <th>Type</th> <!-- VW/VV, Mech, Squonk -->
                    <th>Score</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Manufacturer</th> <!-- smok, vaperesso, smoant -->
                    <th>Model</th> <!-- alien, tarot nano, battlestar -->
                    <th>Size</th> <!-- full, nano, stick -->
                    <th>Type</th> <!-- VW/VV, Mech, Squonk -->
                    <th>Score</th>
                    <th>Price</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr v-for="part in displayedInventory" v-show="part.visibility">
                    <td>
                      {{part.manufacturer}}
                    </td>
                    <td>
                      {{part.model}}
                    </td>
                    <td>
                      {{part.type}}
                    </td>
                    <td>
                      {{part.size}}
                    </td>
                    <td>
                      {{part.score}}
                    </td>
                    <td>
                      {{Number((part.price / 100)).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
  name: 'jsonTable',
  data () {
    return {
      inventory: {},
      displayedInventory: {},
      checkbox:{},
      filters: []
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
    console.log('created');
  }
}
</script>
