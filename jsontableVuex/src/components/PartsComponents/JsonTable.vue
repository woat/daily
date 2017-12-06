<template>
  <div class="JsonTable">
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
        <tr v-for="part in displayedInventory">
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
            {{toCurrency(part.price)}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'JsonTable',
  props: [
    'displayedInventory'
  ],
  methods: {
    toCurrency(price) {
      return Number((price / 100)).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
