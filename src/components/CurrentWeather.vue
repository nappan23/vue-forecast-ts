<template>
  <div>
    {{city.name}}
    <div v-if="!current">
      loading...
    </div>
    <table v-else>
      <thead>
      <tr>
        <th>天気</th>
        <th>最高気温</th>
        <th>最低気温</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{current.weather[0].main}}</td>
        <td>{{current.main.temp_max}}</td>
        <td>{{current.main.temp_min}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import OpenWeatherMapService from '../services/OpenWeatherMapService'

async function init() {
  const res = await OpenWeatherMapService.current(this.city.name)
  this.current = res.data
}

export default {
  name: 'currentWeather',
  components: {},
  props: ['city'],
  watch: {
    city: init
  },
  beforeMount: init,
  data: function () {
    return {
      current: null
    }
  }
}
</script>
<style>

</style>
