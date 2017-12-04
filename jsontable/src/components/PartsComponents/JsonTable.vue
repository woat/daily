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
</template>

<script>
export default {
  name:'JsonTable',
  data: function () {
    return {
      displayedInventory: {}
    }
  }
}
</script>
