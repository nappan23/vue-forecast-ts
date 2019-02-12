<template>
  <div id="app" class="container">
    <aside class="sub-container">
      <CityImput @submit="handleOnSubmit"/>
      <List title="一覧" :items="cities" @deleteItem="handleOnDeleteItem" @selectItem="handleOnSelectItem"/>
    </aside>
    <main class="main-container">
      <CurrentWeather :city="selectedCity" />
      <p>{{ message }} - {{ count }}</p>
      <Count :count="count" @count_up="handleOnCountUp"/>
    </main>
  </div>
</template>
<script>
import store from './store';
import Count from './components/Count';
import List  from './components/List';
import CityImput from './components/CityInput';
import CurrentWeather from './components/CurrentWeather';

export default {
  name: 'app',
  components: {
    Count, List, CityImput, CurrentWeather
  },
  data: () => store.state,
  methods: {
    handleOnSubmit: function (city) {
      this.cities.push({
        name: city
      })
    },
    handleOnCountUp: function () {
      this.count++
    },
    handleOnDeleteItem: function (index) {
      this.cities.splice(index, 1)
    },
    handleOnSelectItem: function (index) {
      this.selectedCity = this.cities[index]
    }
  }
}
</script>
<style>
  html {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    background: #efefef;
  }
  .sub-container {
    width: 200px;
    margin: 8px 0 8px 8px;
    padding: 8px;
    background: #fff;
  }
  .main-container {
    flex: 1;
    margin: 8px;
    padding: 8px;
    background: #fff;
  }
</style>
