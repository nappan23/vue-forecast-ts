<template>
  <form @submit="handleOnSubmit">
    <input type="text" v-model="city" placeholder="都市名">
    <button type="submit">追加</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CityInput',
  data: function(): { city: string } {
    return {
      city: ''
    }
  },
  methods: {
    handleOnSubmit: function(e: Event) {
      e.preventDefault();
      if(this.city.length === 0) {
        return alert('都市名は必ず入力してください。')
      }
      this.$emit('submit', this.city)
      this.city = ''
    }
  }
})

// import { Component, Vue } from 'vue-property-decorator'
// @Component
// export default class CityInput extends Vue {
//   city: string = '';
//   handleOnSubmit(e: Event) {
//     e.preventDefault();
//     if(this.city.length === 0) {
//       return alert('都市名は必ず入力してください。')
//     }
//     this.$emit('submit', this.city)
//     this.city = ''
//   };
// }
</script>
<style>

</style>
